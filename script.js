        let content;
        let tl;
        let audio;
        $(document).ready(function(){
            $('#btn').click(function(){
                $('.body').show();
                // play random audio

                let audio=[
                     'http://62.138.24.206/tb/5/0a/david_guetta_ft_justin_bieber_2u_the_victoria_s_secret_angels_lip_sync_mp3_35257.mp3?play',
                    'http://62.138.24.26/tb/f/5e/ed_sheeran_perfect_official_music_video_mp3_35411.mp3?play',
                    'http://62.138.24.193/tb/4/75/lewis_capaldi_someone_you_loved_mp3_35507.mp3?play',
                    //  'https://www.musixhub.com/details.php?t=a&a=Calum%20Scott&at=You%20Are%20The%20Reason',
                     'http://85.25.74.152/tb/f/74/mhd_bebe_feat._dadju_mp3_35586.mp3?play'
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