# Randomize form fields

## Introduction

Randomizes form input fields to avoid browser's autofill functions to take place. It sets the original names back before form submit.

## Usage

Use it in any form element like so:

```
$('#login_form').randomizeFormFields({
  length: 25
});
```

It is possible to send a length parameter to define how long the field names should be. Default length is 25.

This method is nesteable so you can use it with your existing code:


```
$('#login_form').randomizeFormFields().submit(function(){
  // do your stuff here
});
```

## Contribute

This is an open source plugin, so please contribute with a pull request if you find it useful.

Thanks!
