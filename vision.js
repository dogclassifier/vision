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
                                    cnv1.position(0, 0, 'fixed');
                                    cnv2.position(0,h,'fixed');
                                    camCapture = createCapture(options);
                                    camCapture.size(w,h);
                                    camCapture.hide();
                                    }

                                  
                        function draw() {
                              cnv1=image(camCapture,0,0,w,h);
                         Let imgHuman=document.getElementById('cnv1).getContext("2d").getImageData(0,0,w, h);
                         document.getElementById("cnv2").getContext("2d").putImageData(imgHuman,0,h);
                          
                              
                        }
