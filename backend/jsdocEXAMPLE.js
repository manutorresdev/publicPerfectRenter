/*
 * ###############
 * ## VARIABLES ##
 * ###############
 */

/**
 * Este es el nombre completo del usuario.
 * @type {String}
 */
let fullName = 'Manu';

/*
 * ############
 * ## ARRAYS ##
 * ############
 */

/**
 * Lista de edades de usuarios.
 * @type {Array}
 */
const age = [19, 20, 30, 100];

/**
 * Lista de scores de usuarios.
 * @type {Array<Number>}
 */
const scores = [10, 199.99, 299.99];

/**
 * Lista de numeros y strings
 * @type {Array<Number | string>}
 */
const scoresAndStrings = [10, '10', '30', 3000];

/*
 * ###############
 * ## FUNCIONES ##
 * ###############
 */

/**
 * Esta funcion suma dos numeros.
 * @param {number} n1 First number
 * @param {number} n2 Second number
 * @returns {number} Resultado suma.
 */
function add(n1, n2) {
  return n1 + n2;
}

/**
 * Esta funcion suma dos numeros y retorna un string
 * @param {number} n1 First number
 * @param {number} n2 Second number
 * @returns {string} Resultado suma en string
 */
const addTwo = (n1, n2) => `El resultado es: ${n1 + n2}`;

/*
 * ##################
 * ## CUSTOM TYPES ##
 * ##################
 */

/**
 * Nuevo usuario
 *
 */

/*
 * #############
 * ## OBJETOS ##
 * #############
 */

/**
 * A new User.Object
 * @typedef {Object} User
 * @property {number} id User ID
 * @property {string} name User's Name
 * @property {number} [age] User's Age
 * @property {boolean} isActive User state
 * @example
 * const myNewUser = {
 *  id: 1,
 *  name: 'manu',
 *  age: 30,
 *  isActive: true
 *  }
 * @see www.google.es
 * @todo Use user to login
 */

/**
 * @type {User}
 */
const myNewUser = {
  id: 1,
  name: 'manu',
  age: 30,
  isActive: true,
};

/**
 * @type {User}
 *
 */
const myNewUser2 = {
  id: 2,
  name: 'joe',
  age: 30,
  isActive: false,
};

/*
 * #############
 * ## MODULES ##
 * #############
 */

/**
 *
 *  My helpers
 *  @module Helpers
 *
 *
 */

/**
 * Suma
 * @param {number} x primer numero
 * @param {number} y second numb
 * @returns {number} suma de los numeros
 */
const suma = (x, y) => x + y;
/**
 * Resta
 * @param {number} x primer numero
 * @param {number} y second number
 * @returns {number} resta de los numeros
 */
const resta = (x, y) => x - y;

const express = require('express');

const app = express();

/**
 * @module api
 */

/**
 * Index Route
 * @name index
 * @path {GET} /
 *
 */
app.get('/', (req, res) => res.send('Welcome'));
