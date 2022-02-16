<template>
  <div>
   
      <div
  id="carouselExampleCaptions"
  class="carousel slide carousel-fade relative"
  data-bs-ride="carousel"
>
  <div
    class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4"
  >
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="0"
      class="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="2"
      aria-label="Slide 3"
    ></button>
  </div>
  <div class="carousel-inner relative w-full overflow-hidden rounded-lg">
    <div class="carousel-item active relative float-left w-full">
      <video class="w-full" autoplay loop muted>
        <source src="https://mdbootstrap.com/img/video/Lines.mp4" type="video/mp4" />
      </video>
      <div
        class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
        style="background-color: rgba(50, 123, 233, 0.1)"
      >
        <div class="carousel-caption hidden md:block absolute text-center">
          <h3 class="text-2xl">Light blue mask</h3>
        </div>
      </div>
    </div>
    <div class="carousel-item relative float-left w-full">
      <video class="w-full" autoplay loop muted>
        <source
          src="https://mdbootstrap.com/img/video/animation-intro.mp4"
          type="video/mp4"
        />
      </video>
      <div
        class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
        style="background-color: rgba(135, 50, 233, 0.1)"
      >
        <div class="carousel-caption hidden md:block absolute text-center">
          <h3 class="text-2xl">Light purple mask</h3>
        </div>
      </div>
    </div>
    <div class="carousel-item relative float-left w-full">
      <video class="w-full" autoplay loop muted>
        <source src="https://mdbcdn.b-cdn.net/img/video/Nature-Sunset.mp4" type="video/mp4" />
      </video>
      <div
        class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
        style="background-color: rgba(50, 233, 90, 0.1)"
      >
        <div class="carousel-caption hidden md:block absolute text-center">
          <h3 class="text-2xl">Light green mask</h3>
        </div>
      </div>
    </div>
  </div>
  <button
    class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="prev"
  >
    <span
      class="carousel-control-prev-icon inline-block bg-no-repeat"
      aria-hidden="true"
    ></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button
    class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="next"
  >
    <span
      class="carousel-control-next-icon inline-block bg-no-repeat"
      aria-hidden="true"
    ></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

  </div>
</template>