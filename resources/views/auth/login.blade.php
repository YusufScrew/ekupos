  @extends('layouts.auth')

  @section('login')
  <div class="authentication-inner">
    <!-- Register -->
    <div class="card">
      <div class="card-body">
        <!-- Logo -->
        <div class="app-brand justify-content-center">
          <a href="{{ route('dashboard') }}" class="app-brand-link gap-2">
            <img src="{{ asset('img/ekupos1.png') }}" alt class="w-px-150 h-auto" />
          </a>
        </div>
        <!-- /Logo -->
        <h4 class="mb-2">Welcome to EKU POS! 👋</h4>
        <p class="mb-4">Please sign-in to your account and start working with us</p>

        <form id="formAuthentication" class="mb-3" action="{{ route('login') }}" method="POST">
          @csrf
          <div class="mb-3 @error('email') is-invalid @enderror">
            <label for="bs-validation-server-email" class="form-label">Email</label>
            <input type="text" class="form-control @error('email') is-invalid @enderror" id="email" name="email" placeholder="Enter your email" autofocus required value="{{ old('email') }}"/>
            @error('email')
            <div class="invalid-feedback">
              {{ $message }}
            </div>
            @enderror
          </div>
          <div class="mb-3 form-password-toggle @error('password') is-invalid @enderror">
            <div class="d-flex justify-content-between">
              <label class="form-label" for="bs-validation-server-password">Password</label>
              <a href="auth-forgot-password-basic.html">
                {{-- <small>Forgot Password?</small> --}}
              </a>
            </div>
            <div class="input-group input-group-merge">
              <input type="password" id="password" class="form-control @error('password') is-invalid @enderror" name="password" placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;" aria-describedby="password" required/>
              <span class="input-group-text cursor-pointer"><i class="bx bx-hide"></i></span>
              @error('password')
              <div class="invalid-feedback">
                {{ $message }}
              </div>
              @enderror
            </div>
          </div>
          <div class="mb-3">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="remember-me" />
              <label class="form-check-label" for="remember-me"> Remember Me </label>
            </div>
          </div>
          <div class="mb-3">
            <button class="btn btn-primary d-grid w-100" type="submit">Sign in</button>
          </div>
        </form>

        {{-- <p class="text-center">
          <span>New on our platform?</span>
          <a href="auth-register-basic.html">
            <span>Create an account</span>
          </a>
        </p> --}}
      </div>
    </div>
    <!-- /Register -->
  </div>
  @endsection