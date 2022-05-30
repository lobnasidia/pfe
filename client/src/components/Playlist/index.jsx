import { Fragment } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import music from "../../images/music.png"

const Playlist = ({ playlists }) => {
	return (
		<Fragment>
			{playlists.map((playlist) => (
				<Link key={playlist._id} to={`/playlist/${playlist._id}`}>
					<div className={styles.playlist}>
						{playlist.img === "" ? (
							<img
								src={music}
								alt={playlist.name}
								style={{ background: "#919496" }}
							/>
						) : (
							<img src={playlist.img} alt={playlist.name} />
						)}
						<p>{playlist.name}</p>
						<span>{playlist.desc}</span>
					</div>
				</Link>
			))}
		</Fragment>
	);
};

export default Playlist;
