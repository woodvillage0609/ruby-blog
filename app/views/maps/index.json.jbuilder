json.array!(@maps) do |map|
  json.extract! map, :id, :title, :rating, :comment, :address, :latitude, :longitude
  json.url map_url(map, format: :json)
end
