let tl = gsap.timeline();
tl
    .from("#lowest-nmbr", {
        opacity:0,
        onStart: ()=>{
            $("#lowest-nmbr").textillate({
                in:{effect: "fadeInUp",
                    callback:()=>{
                        $("#lowest-nmbr").textillate("out");
                    }
                },
                out:{effect: "fadeOutUp"}
            });
        }
    })
    .from("#second-lowest", {
        delay:1,
        opacity:0,
        onStart: ()=>{
            $("#second-lowest").textillate({
                in:{effect: "fadeInUp",
                    callback:()=>{
                        $("#second-lowest").textillate("out");
                    }
                },
                out:{effect: "fadeOutUp"}
            });
        }
    })
    .from("#second-high", {
        opacity:0,
        delay:1,
        onStart: ()=>{
            $("#second-high").textillate({
                in:{effect: "fadeInUp",
                    callback:()=>{
                        $("#second-high").textillate("out");
                    }
                },
                out:{effect: "fadeOutUp"}
            });
        }
    })
    .from("#high-nmbr", {
        opacity:0,
        delay:1,
        onStart: ()=>{
            $("#high-nmbr").textillate({
                in:{effect: "fadeInUp",
                    callback:()=>{
                        $("#high-nmbr").textillate("out");
                    }
                },
                out:{effect: "fadeOutUp"}
            });
        }
    })
    .to("#counter-box", {
        top:"-100%",
        delay:1,
        duration:1.3,
        ease:"Power4.easeOut"
    })
