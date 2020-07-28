//functions to 

class Spot {

    //Authorize User With Permissions
    AuthorizeSpotifyUser() {
        app.get('/login', function(req, res) {
        var scopes = 'user-read-private user-read-email';
        res.redirect('https://accounts.spotify.com/authorize' +
          '?response_type=code' +
          '&client_id=' + process.env.REACT_APP_SPOTIFY_API_PUBLIC_KEY +
          (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
          '&redirect_uri=' + encodeURIComponent(redirect_uri));
        });
    }

    //Create A New Plalist
    CreateSpotifyPlaylist() {
        request_body =  '{ "name" : "TestName",' +
                          '"description" : "TestDescription",' +
                          '"public": True }'
        query = "https://api.spotify.com/v1/users/" + process.env.REACT_APP_SPOTIFY_USER_ID + "/playlists"

        var request = require('request');
        response = requests.post({
            query,
            data=request_body,
            headers: {
                "Content-Type": "applications/json",
                "Authorization": "Bearer " + process.env.REACT_APP_SPOTIFY_API_PUBLIC_KEY
            },
        }, function(error, response, body){
            console.log(body);
        });

        response_json = response.json()

        return response_json["id"] //playlist id
    }


}
