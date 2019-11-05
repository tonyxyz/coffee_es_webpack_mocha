import anime from 'animejs/lib/anime.es.js'

export default class Something
  constructor: ->
    console.log('Something is being constructed')

  add: (left, right) ->
    console.log("adding #{left} + #{right}")
    left + right
