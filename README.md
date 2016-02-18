# Foundation Blaze
Blaze wrappers for Foundation Components

## Table of Contents
  * Controls
    * Close Button
  * Containers
    * Dropdown
    * Reveal
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
