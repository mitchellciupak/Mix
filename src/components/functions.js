//functions to 

class Spot {


    //Create A New Plalist
    CreateSpotifyPlaylist() {
        request_body =  '{ "name" : "TestName",' +
                          '"description" : "TestDescription",' +
                          '"public": True }'
        query = "https://api.spotify.com/v1/users/" + process.env.REACT_APP_SPOTIFY_CLIENT_ID + "/playlists"

        // response = requests.post
                        
    }


}
