# Foundation Blaze
  Blaze wrappers for Foundation Components.

  [See everything in action at foundation-blaze.meteor.com](http://foundation-blaze.meteor.com/)

  Note: The above site is, at the moment, simply a testing ground. Eventually the site will include the code next to each demoed item, and hopefully code editors.

## Table of Contents
  * Controls
    * Close Button
    * Slider
    * Switch
  * Containers
    * Dropdown
    * Reveal
  * Media
    * Orbit
    * Progress Bar
    * Tooltip
  * Navigation
    * Dropdown Menu
  * To Dos
    * Navigation
      * Drilldown Menu
      * Accordion Menu
      * Magellan
      * Pagination
      * Breadcrumbs
    * Containers
      * Accordion
      * Off-canvas
      * Table
      * Tabs

## Controls

### Close Button

  ```
  {{> zfCloseX}}
  ```

### Slider

  ```
  {{> zfSlider start=5 end=100 name='basic'}}
  {{> zfSlider start=5 end=100 vertical=true name='vertical'}}
  {{> zfSlider lStart=20 rStart=60 end=100 lName='lInput' rName='rInput'}}

  {{> zfSliderInput id='lInput'}}
  {{> zfSlider lStart=20 rStart=60 end=100 lInput='lInput' rInput='rInput'}}
  {{> zfSliderInput id='rInput'}}
  ```

### Switch

  ```
  {{> zfSwitch id='id' name='' classes='' srText='' onText='' offText=''}}
  {{> zfSwitchRadio id='id' name='' classes='' srText='' onText='' offText=''}}
  ```

## Containers

### Dropdown

  ```
  {{#zfDropdown id='id' hover=false autoFocus=false buttonClasses='' paneClasses='' options=''}}
    Content
  {{/zfDropdown}}
  ```

### Reveal

  ```
  {{> zfRevealLink id='id' classes='' text=''}}
  {{> zfRevealButton id='id' classes='' text=''}}

  {{#zfRevealLinkBlock id='id' classes='' text=''}}
    Content
  {{/zfRevealLinkBlock}}
  {{#zfRevealButtonBlock id='id' classes='' text=''}}
    Content
  {{/zfRevealButtonBlock}}

  {{#zfRevealModal id='id' classes='' options=''}}
    Content
  {{/zfRevealModal}}
  ```

## Media

### Orbit

  ```
  {{> zfOrbit slides=slides template='Slide'}}
  ```

### Progress Bar

  ```
  {{> zfProgressBar progress=50 classes=''}}
  ```

### Tooltip

  ```
  {{#zfTooltip tip='tip' classes='' options=''}}
    Content
  {{/zfTooltip}}
  ```

## Navigation

### Dropdown Menu

  ```
  {{#zfDropdownMenu}}
    {{#zfSubMenu text='Item 1'}}
      <li><a href="#">Item 1A</a></li>
    {{/zfSubMenu}}
    <li><a href="#">Item 2</a></li>
  {{/zfDropdownMenu}}
  ```
