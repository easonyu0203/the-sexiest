# 2020 web programming final project

## intro

design a web site that let user choose who the sexiest celebrity. Kinda like a mini game. after playing it will display the result that gather from all the users and the sexiest celebrity that majority user think.

## design ideal

this website ideal is inspired by the movie "Social Network" the scene when Mark Zuckerberg design a website that rank all the girls in dorm, since it is too immortal to rank average people, we only rank celebrities, it still a little bit immortal but since celebrities is always judge by everyone and it fun to know majority of people think, we decide to do this project.

## 操作方式和使用(使用者端)

進入 homepage 後可以看到 start game，tutorial 鍵，旁邊有目錄欄，可以點選至你想去的頁面，接著會進行調查小遊戲，如果不知道怎麼操作調查小遊戲的玩家可以點 tutorial 觀看教學 ，會有一連串的教學，或是可直接進入遊戲。

## 遊戲說明

共有 10 round，每一回合有兩個女明星的照片，附有女明星的 official ig 可以供玩家進入觀看(若此女明星無 official ig 則沒附)，玩家點擊兩位女明星中較喜歡的那一位，玩家喜歡的女明星會接著進入下一回合的比較，10 round 結束後會進入 result 頁面，顯示統計至目前女明星的排名，點選排行榜上女明星們的照片可以看到美麗的照片~~~

## 整體心得

修完這門課之後，對於如何架設一個完整的 web application 有更進一步的認識。project 題目花了一陣子才決定好，原本是想做台大美食地圖相關的內容，然而因為看到許多組也做類似的題目，於是改成做這個題目，以後有空也想做一個 TA 是女性的版本。project 期間，我們除了對網路開發的不同框架有更進一步的認識以外，還學習如何將自己寫的東西與別人的銜接，整體而言是一個很不錯的體驗！

## meta infromation

- framework: React-Express
- 前端：React、 react-router
- 後端：express-router
- Database：MongoDB
- data collection: web crawling from instagram for photo and basic intro of the celebrity
- deploy 網址： https://front-the-sexiest.herokuapp.com/
- domo video link: https://youtu.be/e_xWsmhikyU

## Available Scripts

```
yarn start
```

Runs in deploy mode.

```
yarn server
```

Runs backend server in development mode.

## 組員貢獻:

- 葉小漓 :前端 設計 home page 美觀設計和資料收集
- 游淯聖 :前端 ,後端 , database(MongoDB) 前後端架設及連結及美觀設計
- 楊鈞安 :後端 ,deploy 後端架設和前端動畫設計

## web page design detail

### Home page

when user first go to this site. we first intro about the site and instruct them how to play.(the instruction should be simple)

### About page

introduction of the page and what inspirate us to make this website.

### Tutorial page

little demo who the game play

#### site component

- introduction of website
- button to start playing

### Playing pages

pages let the user play the game

#### how to play

1. when user start playing, it will display to celebrities (there photo, instogram follower count, brief intro...)
2. the user must decide who is sexier and choose that one, and the unchoosen one will be throw away subsitute by another celebrity.
3. repeate this for several rounds(assume 10 round), then game over.
4. redirect to result page.

### Result page

display the result of ranking of sexiest celebrity which gather from all users playing result
