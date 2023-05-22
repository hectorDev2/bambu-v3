export const formatData = (items: any) => {
  return items.map((item: any) => {
    let id = item.sys.id
    let images = item.fields.images.map((image: any) => image.fields.file.url)
    const room = { ...item.fields, images, id } // Reformating the array

    return room
  })
}
