import type React from "react"
import type { Song } from "../types"

interface SongListProps {
  songs: Song[]
  onSongSelect: (song: Song) => void
}

const SongList: React.FC<SongListProps> = ({ songs, onSongSelect }) => {
  return (
    <div className="mb-4">
      <h2 className="text-xl font-semibold mb-2">Search Results</h2>
      <ul className="space-y-2">
        {songs.map((song) => (
          <li
            key={song.id}
            className="p-2 border rounded cursor-pointer hover:bg-gray-100"
            onClick={() => onSongSelect(song)}
          >
            <img src={song.image} height={100} width={100} alt=""  />
            <h3 className="font-medium">{song.song}</h3>
            <p className="text-sm text-gray-600">{song.singers}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SongList

