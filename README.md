# Randomize form fields

## Introduction

A jQuery plugin that randomizes form input fields' names to avoid browser's autofill functions to take place. It sets the original names back before form submit.

![WtxHi](https://user-images.githubusercontent.com/25403642/123801163-6719da00-d8c0-11eb-8486-c91ebd01c072.png)

## Usage

### Load the plugin

```html
<script src="your_scripts_folder/jquery-latest.min.js"></script>
<script src="your_scripts_folder/randomize-form-fields/jquery.randomizeFormFields.js"></script>
```

### Use it in any ```<form>``` tag

```html
<form id="login_form" action="" method="post">
  <input type="text" class="form-control" name="email" id="email" placeholder="E-mail">
  <input type="password" class="form-control" name="secret" id="secret" placeholder="Password">
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
```

```javascript
$('#login_form').randomizeFormFields();
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

```javascript
$('#login_form').randomizeFormFields({
  length: 25,// default randomized name length
  exclude: []// fields that should not be randomized (name attribute)
});
```

This method can be nested and used with existing asynchronous code:

```javascript
$('#login_form').randomizeFormFields().submit(function(){
  const form_data = $(this).serializeArray();
  const url = 'process_form.php';
  
  let posting = $.post(url, form_data);
  
  posting.done(function(data){
    // process your return here
  });
});
```

## Contribute

This is an open source plugin, so please contribute with a pull request if you find it useful.

Thanks!
