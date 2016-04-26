json.array!(@articles) do |article|
  json.extract! article, :id, :image, :title, :content, :url, :source, :comment
  json.url article_url(article, format: :json)
end
