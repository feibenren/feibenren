---
title: FREECODECAMP
categories: 
- BOOK

---


-----------------
All img elements must have an alt attribute.
Note: If the image is purely decorative, using an empty alt attribute is a best practice.
img标签必须带有alt属性，如果这个图片是单纯的装饰性的，最佳实践是给一个空的alt
-------------------
Make Dead Links Using the Hash Symbol
用#符号创造死链接
------------------
HTML has a special element for creating unordered lists, or bullet point style lists.
unordered lists:ul
-----------------
HTML has another special element for creating ordered lists, or numbered lists.
----------
Each of your radio buttons can be nested within its own label element.
-----------
It is considered best practice to set a for attribute on the label element, with a value that matches the value of the id attribute of the input element.
------------
Each of your checkboxes can be nested within its own label element. By wrapping an input element inside of a label element it will automatically associate the checkbox input with the label element surrounding it.
---------------
You can set a checkbox or radio button to be checked by default using the checked attribute
---------------
At the top of your document, you need to tell the browser which version of HTML your page is using. HTML is an evolving language, and is updated regularly. Most major browsers support the latest specification, which is HTML5. However, older web pages may use previous versions of the language.
You tell the browser this information by adding the <!DOCTYPE ...> tag on the first line, where the "..." part is the version of HTML. For HTML5, you use <!DOCTYPE html>.
The ! and uppercase DOCTYPE is important, especially for older browsers. The html is not case sensitive.
---------------
Family names are case-sensitive and need to be wrapped in quotes if there is a space in the name. For example, you need quotes to use the "Open Sans" font, but not to use the Lobster font.
字体名称是大小写敏感的，如果中间有空格，就需要使用引号包裹，否则没必要

---------------
Note: It doesn't matter which order the classes are listed in the HTML element.

However, the order of the class declarations in the <style> section are what is important. The second declaration will always take precedence over the first. Because .blue-text is declared second, it overrides the attributes of .pink-text

---------------
To create a CSS Variable, you just need to give it a name with two dashes in front of it and assign it a value like this:

--penguin-skin: gray;
css变量申明方式

After you create your variable, you can assign its value to other CSS properties by referencing the name you gave it.
css变量使用方式
background: var(--penguin-skin);

默认值:

background: var(--penguin-skin, black);

---------------
When you create a variable, it becomes available for you to use inside the element in which you create it. It also becomes available within any elements nested within it. This effect is known as cascading.
当创建了一个css变量，这个变量只能在包裹的元素中，还有它的子元素中使用，这个效果叫做级联
Because of cascading, CSS variables are often defined in the :root element.
因为级联，css变量经常定义在:root中
You can think of the :root element as a container for your entire HTML document, in the same way that an html element is a container for the body element.
:root,可以理理解成所有html元素的包裹层，这里面的变量，会影响整个页面
By creating your variables in :root, they will be available throughout the whole web page.

---------------
text-align: justify; causes all lines of text except the last line to meet the left and right edges of the line box.
text-align: justify;除了最后一样，其他行都是让所有的文字靠近左右边界
---------------
With the s tag, the browser applies the CSS of text-decoration: line-through; to the element.

---------------
background: linear-gradient(gradient_direction, color 1, color 2, color 3, ...);
---------------

<style>

  #ball {
    width: 70px;
    height: 70px;
    margin: 50px auto;
    position: fixed;
    left: 20%;
    border-radius: 50%;
    background: linear-gradient(
      35deg,
      #ccffff,
      #ffcccc
    );
    animation-name: fade;
    animation-duration: 3s;
  }

  @keyframes fade {
    50% {
      left: 60%;
      opacity:0.1;
      
    }
  }

</style>

<div id="ball"></div>
动画，不一定所有片段都要定义

---------------
<img src="importantLogo.jpeg" alt="Company logo">
alt:Alternative 
---------------
# Improve Chart Accessibility with the figure Element


HTML5 introduced the figure element, along with the related figcaption. Used together, these items wrap a visual representation (like an image, diagram, or chart) along with its caption. This gives a two-fold accessibility boost by both semantically grouping related content, and providing a text alternative that explains the figure.

For data visualizations like charts, the caption can be used to briefly note the trends or conclusions for users with visual impairments. Another challenge covers how to move a table version of the chart's data off-screen (using CSS) for screen reader users.

---------------
Applied Accessibility: Wrap Radio Buttons in a fieldset Element for Better Accessibility

The next form topic covers accessibility of radio buttons. Each choice is given a label with a for attribute tying to the id of the corresponding item as covered in the last challenge. Since radio buttons often come in a group where the user must choose one, there's a way to semantically show the choices are part of a set.

The fieldset tag surrounds the entire grouping of radio buttons to achieve this. It often uses a legend tag to provide a description for the grouping, which is read by screen readers for each choice in the fieldset element.

The fieldset wrapper and legend tag are not necessary when the choices are self-explanatory, like a gender selection. Using a label with the for attribute for each radio button is sufficient
```
<form>
  <fieldset>
    <legend>Choose one of these three items:</legend>
    <input id="one" type="radio" name="items" value="one">
    <label for="one">Choice One</label><br>
    <input id="two" type="radio" name="items" value="two">
    <label for="two">Choice Two</label><br>
    <input id="three" type="radio" name="items" value="three">
    <label for="three">Choice Three</label>
  </fieldset>
</form>
```

---------------
Continuing with the date theme, HTML5 also introduced the time element along with a datetime attribute to standardize times. 
---------------
The Web Content Accessibility Guidelines (WCAG) recommend at least a 4.5 to 1 contrast ratio for normal text
---------------
HTML offers the accesskey attribute to specify a shortcut key to activate or bring focus to an element.
<button accesskey="b">Important Button</button>
快捷键
---------------
tabindex数值不同有什么意义吗
---------------
In JavaScript, String values are immutable, which means that they cannot be altered once created.
---------------
If you have multiple conditions that need to be addressed, you can chain if statements together with else if statements.

else if ：中间有空格，不能连着写
---------------
Write a switch statement to set answer for the following ranges:
1-3 - "Low"
4-6 - "Mid"
7-9 - "High"


---------------
---------------
---------------
---------------
---------------
---------------
---------------
---------------
---------------
---------------
---------------
---------------
---------------
---------------
---------------
---------------
---------------
---------------
---------------
---------------
---------------
---------------
---------------
---------------
---------------
---------------
---------------
---------------
---------------
---------------
---------------
---------------
---------------
---------------
---------------
---------------
---------------
---------------
---------------
---------------
---------------
---------------
---------------
---------------
---------------
---------------
---------------
---------------
---------------
---------------
---------------
---------------
---------------
---------------
---------------
---------------



