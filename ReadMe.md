# 2020 web programming final project

## intro
design a web site that let user choose who the sexiest celebrity. Kinda like a mini game. after playing it will display the result that gather from all the users and the sexiest celebrity that majority user think.

## design ideal
this website ideal is inspired by the movie "Social Network" the scene when Mark Zuckerberg design a website that rank all the girls in dorm, since it is too immortal to rank average people, we only rank celebrities, it still a little bit immortal but since celebrities is always judge by everyone and it fun to know majority of people think, we decide to do this project.


## meta infromation
* framework: React-Express
* data collection: web crawling from instagram for photo and basic intro of the celebrity
* deploy 網址： https://front-the-sexiest.herokuapp.com/

## Available Scripts
```
yarn start
```
Runs frontend react app in the development mode.
```
yarn server
```
Runs backend server in development mode.

## 組員貢獻:
* 葉小漓 :前端 設計home page美觀設計和資料收集
* 游淯聖 :前端 ,後端 , database(MongoDB) 前後端架設及連結及美觀設計
* 楊鈞安 :後端 ,deploy 後端架設和前端動畫設計


## web page design detail
### Home page
when user first go to this site. we first intro about the site and instruct them how to play.(the instruction should be simple)

### About page
introduction of the page and what inspirate us to make this website.
### Tutorial page
little demo who the game play
#### site component
* introduction of website
* button to start playing

### Playing pages
pages let the user play the game
#### how to play
1. when user start playing, it will display to celebrities (there photo, instogram follower count, brief intro...)
2. the user must decide who is sexier and choose that one, and the unchoosen one will be throw away subsitute by another celebrity.
3.  repeate this for several rounds(assume 10 round), then game over.
4.  redirect to result page.

### Result page
display the result of ranking of sexiest celebrity which gather from all users playing result

