//device-width = 设备横向的物理分辨率 / (deviePixelRatio * scale)     令 scale = 1 / devicePixelRatio ，使diveice-width = 设备横向的物理分辨率
let scale = 1 / devicePixelRatio;
document.querySelector('meta[name="viewport"]').setAttribute('content', 'initial-scale=' + scale 
                        + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');
document.documentElement.style.fontSize = document.documentElement.clientWidth / 10 + 'px';