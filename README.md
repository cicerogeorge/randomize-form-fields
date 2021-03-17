# Randomize form fields

## Introduction

Randomizes form input fields to avoid browser's autofill functions to take place. It sets the original names back before form submit.

## Usage

### Load the plugin

```html
<script src="your_scripts_folder/randomize-form-fields/jquery.randomizeFormFields.js"></script>
```

### Use it in any form element

```html
<form id="login_form" action="" method="post">
  <input type="text" class="form-control" name="email" id="email" placeholder="E-mail">
  <input type="password" class="form-control" name="secret" id="secret" placeholder="Password">
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
```

```javascript
$('#login_form').randomizeFormFields({
  length: 25
});
```

```html
<!-- actual html presented -->
<input type="text" class="form-control" name="yQoiFZkCrzwWXN3WWgM8Jblby" id="email" placeholder="E-mail">
<input type="password" class="form-control" name="ono1qamA9CzrH4tW2COoRtFKI" id="secret" placeholder="Passord">
```

```php
// returned post (php example)
array(2) {
  ["email"]=>
  string(16) "email@domain.com"
  ["secret"]=>
  string(19) "supersecretpassword"
}
```

### Options

It is possible to send a length parameter to define how long the field names should be. Default length is 25.

This method is nesteable so you can use it with your existing code:


```javascript
$('#login_form').randomizeFormFields().submit(function(){
  // do your stuff here
});
```

## Contribute

This is an open source plugin, so please contribute with a pull request if you find it useful.

Thanks!
