        let content;
        let tl;
        let audio;
        $(document).ready(function(){
            $('#btn').click(function(){
                $('.body').show();
                // play random audio

                let audio=[
                    '../audio/Ed Sheeran - Perfect (Official Music Video) ( 160kbps ).mp3',
                    '../audio/lewis_capaldi_someone_you_loved_lyrics_mp3_72688.mp3',
                    '../audio/david_guetta_ft_justin_bieber_2u_the_victoria_s_secret_angels_lip_sync_mp3_28772.mp3',
                    '../audio/mhd_bebe_feat._dadju_mp3_72720.mp3'
                ]

                let audioArray= audio[Math.floor(Math.random()*audio.length)];
                let audioPlay=new Audio(audioArray);
                audioPlay.play();

                

                // page animation
                let tl=new TimelineMax();
                 tl.to('.body',5,{scaleY:1, height:'70vh',opacity:1, ease: "steps(6)"})

                 $('.btn').attr('disabled',true)

                 $("#input").on('keydown',function(){
                    $('.btn').attr('disabled',false);
                    $('#btn').click(function(){
                        audioPlay.pause();
                    });

                 });
            });
        });

        

        let app=angular.module("myApp",[]);
        app.filter('capitalize', function(){
            return function(input){ 
             return(angular.isString(input) && input.length>0) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase()  : input;
         }
        });