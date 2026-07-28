// css modules - пример использования
import styles from '@/components/Button.module.scss';

// Выведем в консоль, чтобы ты увидал, во что Webpack превратил твои стили!
console.log('Объект стилей:', styles); 
// В консоли будет что-то вроде: { btn: "src-Button-module__btn--3x9a1", title: "src-Button-module__title--1a2b3" }

// Создаем элементы через чистый JS
const container = document.createElement('div');

const title = document.createElement('h1');
title.textContent = 'Тест CSS Modules в JS';
// Применяем уникальный класс из объекта!
title.className = styles.title; 

const button = document.createElement('button');
button.textContent = 'Нажми меня';
// Применяем класс кнопки
button.className = styles.btn; 

container.appendChild(title);
container.appendChild(button);

document.body.appendChild(container);