new TypeIt("#tqyxhj", {
        loop: true,
        cursorSpeed: 1000,
        speed: 100
    })
    .type("小木宝 ❤️ 丁先生")
    .pause(2000)
    .delete(null, {
        delay: 500
    })
    .type("不管是晴天阴天雨天,能见到你的一天,就是晴朗的一天.不管是昨天今天明天,能和你在一起的一天,就是美好的一天.")
    .pause(3000)
    .go();

new TypeIt('#talkToXHJ', {
    lifeLike: true,
    cursorSpeed: 1000,
    waitUntilVisible: true,
    speed: 100
}).go();