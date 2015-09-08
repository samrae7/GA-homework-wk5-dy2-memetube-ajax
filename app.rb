require 'sinatra'
require 'sinatra/contrib/all'
require 'json'
require 'pg'
require 'pry-byebug'

before do
  @db = PG.connect(dbname:'memetube', host:'localhost')
end

after do 
  @db.close
end


get '/' do

  redirect to '/videos'

end

# INDEX
get'/videos' do

  sql = 'select * from videos order by id asc'

  @videos = @db.exec(sql)

  # binding.pry

  if request.xhr?
    json @videos.entries
  else
    erb :index
  end
end

 # NEW
get '/videos/new' do
  # erb :new 
end

 # CREATE
post '/videos' do

  @full_url = params[:url]

  @url_snippet = url_to_snippet @full_url

  sql="insert into videos (title, description, genre, url) values ( '#{params[:title]}', '#{params[:description]}','#{params[:genre]}','#{@url_snippet}') returning *"

 @videos = @db.exec(sql)

 id = @videos.first['id']

redirect to "/videos/#{id}"

end

 # SHOW
get '/videos/:id' do

  @id = params[:id]

  sql = "select * from videos where id = #{@id}"

  @video = @db.exec(sql)

  @url = @video.first['url']
  @title = @video.first['title']
  @description = @video.first['description']
  @genre = @video.first['genre']
  

  erb :video


end

 # EDIT
get '/videos/:id/edit' do

  @id = params[:id]

  sql = "select * from videos where id = #{@id}"

  @video = @db.exec(sql)
  @title = @video.first['title']
  @description = @video.first['description']
  @genre = @video.first['genre']
  @url = @video.first['url']

  erb :edit

end

 # UPDATE
post '/videos/:id' do

  @id = params[:id]
  @url_snippet = url_to_snippet params[:url]

  sql= "update videos
  set title= '#{params[:title]}', description = '#{params[:description]}',
   genre = '#{params[:genre]}',
   url = '#{@url_snippet}' WHERE id = '#{@id}';"

   @videos = @db.exec(sql)

  redirect to "/videos/#{@id}"


end

 # DELETE

post '/videos/:id/delete' do


  # question - i thought this would work with a get and without the need for a form. why doesn't it? ie by going to the url you could delete the item.

  sql = "delete from videos where id =#{params[:id]}"

  @db.exec(sql)

  redirect to '/videos'

end


def url_to_snippet full_url 

  url_snippet = full_url[-11, 11]

end