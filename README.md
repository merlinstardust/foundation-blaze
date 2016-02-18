# Foundation Blaze
Blaze wrappers for Foundation Components

## Table of Contents
  * Controls
    * Close Button
  * Containers
    * Dropdown
  * Media
    * Progress Bar
    * Tooltip
  * To Dos
    * Controls
      * Slider
      * Switch
    * Navigation
      * Dropdown Menu
      * Drilldown Menu
      * Accordion Menu
      * Magellan
      * Pagination
      * Breadcrumbs
    * Containers
      * Accordion
      * Off-canvas
      * Reveal
      * Table
      * Tabs
    * Media
      * Orbit

## Controls

### Close Button

```
{{> zfCloseX}}
```

## Containers

### Dropdown

```
{{#zfDropdown id='id' hover=false autoFocus=true buttonClasses='' paneClasses='' options=''}}
  Content
{{/zfDropdown}}
```

### Reveal

```
{{> zfRevealLink id='id' classes='' text=''}}
{{> zfRevealButton id='id' classes='' text=''}}
{{#zfRevealModal id='id' classes='' options=''}}
  Content
{{/zfRevealModal}}
```

## Media

### Progress Bar

```
{{> zfProgressBar progress=50 classes=''}}
```

### Tooltip

```
{{#zfTooltip title='title' classes='' options=''}}
  Content
{{/zfTooltip}}
```
