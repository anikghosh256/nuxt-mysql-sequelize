<template>
  <div class="container row justify-content-center">
    <div class="my-5 col-12 col-md-8 border border-light rounded px-0">
      <div class="border-bottom border-light mb-4">
        <!--single line form-->
        <form action="{{ route('search') }}" method="GET" class="row">
          <div class="form-group col">
            <input
              type="text"
              name="content"
              class="form-control"
              placeholder="Title || Content"
            />
          </div>
          <div class="col-2 mr-0">
            <button type="submit" class="btn btn-primary w-100">Add</button>
          </div>
        </form>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Content</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row" class="align-middle">1</th>
            <td class="align-middle">Mark</td>
            <td class="align-middle">Otto</td>
            <td>
              <button class="btn btn-primary">Edit</button>
              <button class="btn btn-danger ms-3">Delete</button>
            </td>
          </tr>
          <tr>
            <th scope="row" class="align-middle">2</th>
            <td class="align-middle">Mark</td>
            <td class="align-middle">Otto</td>
            <td>
              <button class="btn btn-primary">Edit</button>
              <button class="btn btn-danger ms-3">Delete</button>
            </td>
          </tr>
          <tr>
            <th scope="row" class="align-middle">3</th>
            <td class="align-middle">Mark</td>
            <td class="align-middle">Otto</td>
            <td>
              <button class="btn btn-primary">Edit</button>
              <button class="btn btn-danger ms-3">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
