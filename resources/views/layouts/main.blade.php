<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>BuddyPress</title>
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.0/css/materialize.min.css">

    <!-- <link rel="stylesheet" href="style.css"> -->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    @yield('styles')
  </head>
  <body>
    <div id="app">
      @yield('content')
    </div>
    <!-- built files will be auto injected -->
  </body>
  @yield('scripts')
  {{-- <script type="text/javascript" src="{{ asset('js/vendor.js') }}"></script> --}}

  <script src="{{ asset('js/app.js') }}"></script>
</html>
