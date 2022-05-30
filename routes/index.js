const router = require("express").Router();
const admin = require("../middleware/admin");
const auth = require("../middleware/auth");
const validateObjectId = require("../middleware/validateObjectId");
const {createPlaylist,getPlaylist,updatePlaylist,deletePlaylist,addSongtoPlaylist,removeSongfromPlaylist,userFavourites,getRandomPlaylists,getAllPlaylists}=require("../controllers/PlaylistController")
const {createSong,getSongs,updateSong,deleteSong,likedSongs,likeSong}=require("../controllers/SongController")
const {signup,login,getUser,getUsers,updateUser,deleteUser}=require("../controllers/UserController")
const {search} =require('../controllers/SearchController')



router.post("/signup", signup)
router.post("/login", login)
router.get("/", getUsers)
router.get("/:id", [validateObjectId, auth], getUser)
router.put("/:id", [validateObjectId, auth], updateUser)
router.delete("/:id", [validateObjectId, admin], deleteUser)

router.post("/create", createSong)
router.get("/getsongs/all", getSongs)
router.put("/update/:id", [validateObjectId, admin], updateSong)
router.delete("/delete/:id", [validateObjectId, admin],deleteSong)
router.put("/like/:id", [validateObjectId, auth],likeSong)
router.get("/liked/liked", auth, likedSongs)


router.post("/createplaylist", auth,createPlaylist)
router.get("/:id", [validateObjectId, auth], getPlaylist)
router.put("/edit/:id", [validateObjectId, auth], updatePlaylist)
router.delete("/remove/:id", [validateObjectId, auth],deletePlaylist)
router.put("/add-song/add", auth, addSongtoPlaylist)
router.put("/remove-song/remove", auth, removeSongfromPlaylist)
router.get("/favourite/:id", auth, userFavourites)
router.get("/random/random", auth, getRandomPlaylists)
router.get("/playlists/all", auth,getAllPlaylists)


router.get("/", auth, search)

module.exports = router;
