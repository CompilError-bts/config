"use strict";
module.exports = {
    general: {
        platform:           2,
        kickoff:            false,
        ignore_self:        true,
        web_image_timeout:  30,
        web_record_timeout: 30,
        debug:              false,

        host:               "0.0.0.0",
        port:               5700,
        use_http:           false,
        use_ws:             false,
        access_token:       "999127",
        secret:             "999127",
        post_timeout:       30,
        post_message_format:"string",
        enable_heartbeat:   false,
        heartbeat_interval: 15000,
        event_filter:       "",
        post_url: [
            
        ],
        ws_reverse_url: [ 
            "ws://xn--v9x.net/ws/",
        ],
        ws_reverse_reconnect_interval: 3000,
    }
};