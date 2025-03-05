import { forwardRef } from "react"

const AudioPlayer = forwardRef((props, ref) => {
  return (
    <audio
      ref={ref}
      loop
      src="/audio/chill-vibes-lofi-chill-hiphop-background-music-304596.mp3"
      className="hidden"
    />
  )
})

AudioPlayer.displayName = "AudioPlayer"

export default AudioPlayer