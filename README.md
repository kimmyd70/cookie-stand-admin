# Cookie Stand Admin with REACT and JavaScript in 3 parts
(parts 2-3 at bottom)


### PR for this file: https://github.com/kimmyd70/cookie-admin/pull/1

This is Lab 37 of 401-Python (seattle-py-401n2)

Developers: Kim Damalas

Date: 8 April 2021
____________________

### Feature Tasks

1.  Create an app using Next.js and style using Tailwind CSS.

2. Implement with `npx create-next-app --example with-tailwindcss cookie-stand-admin`

3. strip out unused files

4. The spec for lab is screen shot of Cookie Stand 
pages/Index.js in `assets`
- [x] Have <Head> component with page title set to Cookie Stand Admin

- [x] Have a header component that matches spec.

- [x] Have a <main> component containing <form> and a placeholder component showing JSON string of last created Cookie Stand.

- [x] Have a <footer> component that matches spec.

Pro tip: Tailwind CSS Extension Pack


__________________

### Server and Client

- Server: Next.js
- Client: REACT

____________________

### Testing

None required (visual against spec)

_____________________

---- v2 ----
_____________________

### PR for this file: https://github.com/kimmyd70/cookie-admin/pull/2

This is Lab 38 of 401-Python (seattle-py-401n2)

Developers: Kim Damalas

Date: 14 April 2021
____________________

## Feature Tasks

The two specs for lab are in `assets`. Pages/Index.js should return top level component `<CookieStandAdmin>` details…

- [x] Have a `<Head>` component.
    - `<Head>` should set page title Cookie Stand Admin
- [ ] Have a custom `<Header>` component that matches spec.
    - `<Header>` component should have Next `<Link>` to overview page.
- [ ] Have a `<main>` component.
    - Within `<main>` have custom `<CreateForm>` and `<ReportTable>` components.
    - Import time slot data from supplied data.js file.
- [ ] Have a custom `<Footer>` component that matches spec.
----------

### `<CreateForm>` component details…
- [ ] Receive an onCreate function to be called when form is submitted.
    - onCreate should be passed argument object representing new cookie stand.

    - Object should have location property.

    - Object should have hourly_sales property with hard coded [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36]

--------
### `<ReportTable>`    details…

- [ ] should receive hours on props that is an array cookie stand hours of operation.

- [ ] should receive reports on props that is an array all cookie stand objects.

- [ ] If reports is empty then render "No Cookie Stands Available" (see spec in assets)

- [ ] If reports is not empty then render a table with thead,tbody and tfoot components.
    - Component should render to match spec.
    - Component is responsible for tallying totals for each cookie stand as well as all cookie stands per hourly slot.

--------
### `<Footer>` component details…

- [ ] Should receive reports array on props.

- [ ] Should display X Locations World Wide where X is number of cookie stands.

- [ ] `<Header>`,`<Footer>`,`<CreateForm>` and `<ReportTable>` should each be in own file inside top level components folder.

- [ ] Those components should be imported into Index.js

--------
### Overview page details…

- [ ] should live in pages/overview.js

- [ ] should render `<Link href="/"><a>Return to Main page</a></Link>`

- [ ] Style all components using TailwindCSS utility classes to match spec.

Pro tip: Tailwind CSS Extension Pack


__________________

### Server and Client

- Server: Next.js
- Client: REACT

____________________

### Testing

None required (visual against spec)

