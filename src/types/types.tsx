export interface IPicture {
  id: number
  liked: boolean
  url: string
  photographer: string
  photographer_id: number
  photographer_url: string
  src: {
    original: string
    large2x: string
    large: string
    medium: string
    small: string
    landscape: string
    portrait: string
    tiny: string
  }
  avg_color: string
  height: number
  width: number
}
