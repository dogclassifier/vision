function setup(){
                                                      
                                    var options = {

                                         video: {

                                             facingMode: {
                                              exact: "environment"
                                            }

                                         },
                                    audio: false
                                       };


                                    w=window.innerWidth;
                                    head=20;
                                    h=Math.round(window.innerHeight/2);
                                                                        
                                    cnv1=createCanvas(w,h);
                                    cnv2=createCanvas(w,h);
                                    cnv1.position(0, 0, 'relative');
                                    cnv2.position(0,h,'relative');
                                    camCapture = createCapture(options);
                                    camCapture.size(w,h);
                                    camCature.hide();
                                    }

                                  
                        function draw() {
                              cnv1=image(camCapture,0,0,w,h);
                              
                        }
