var smallKenan = function (action) {
    var bigKenan = function (doing) {
        var result = "";
        if (action === "take drugs") {
            if (doing === "bathWithGirlFriend") {
                result = "尖叫，新一，你这个色狼，然后一巴掌，脸煮熟了~";
            } else if (doing === "pointOutKiller") {
                result = "新一，这个案子就交给你的，快点找出谁是凶手吧~";
            }
        } else {
            if (doing === "bathWithGirlFriend") {
                result = "来吧，柯南，一起洗澡吧~";
            } else if (doing === "pointOutKiller") {
                result = "小孩子家，滚一边去！";
            }
        }
        console.log(result);
        return arguments.callee; // 等同于return bigKenan
    };
    return bigKenan;
};

// 小柯南吃药了，然后和毛利兰洗澡，凶案现场指证犯人；结果是……
smallKenan("take drugs")("bathWithGirlFriend")("pointOutKiller");