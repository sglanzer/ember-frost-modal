# 3.8.1
* Enable visual acceptance test
* Switch from Firefox to Chrome for testing env.


# 3.8.0

* **Added** two new test helpers: `expectModalWithContent()` and `expectModalWithIcon()`.
* **Added** `icon` and `content` support to `expectModalWithState()` test helper.



# 3.7.0

* **Added** two more test helpers: `clickModalCancelButton()` and `clickModalConfirmButton()`.
* **Fixed** bithound.io badge in [README](README.md).


# 3.6.0

* **Added** documentation for test helpers.


# 3.5.0

* **Added** test helpers that can be used by consumers.


# 3.4.0

* **Added** new `buttons` property to modals to allow user to specify additional buttons to show between the cancel and confirm buttons in the modal footer.



# 3.3.0

* **Added** new `footer` property to modals that allows arbitrary text to be rendered in the left side of the footer.



# 3.2.0

* **Added** optional `subtitle` property to modals to support adding a subtitle to the header.
* **Upgraded** `devDependencies` to latest versions for demo app.



# 3.1.2
* Removed the hack for dynamically disabling confirm on forms
* Added a computed property for params that fires whenever attributes are updated
* Updated the info demo to demonstrate this ability in both the summary and confirm params



# 3.1.1
* Updated the info dialog demo to show a simple summary message binding



# 3.1.0
* Added a hack to allow confirm buttons on the frost-modal-form to be disabled - a better proxy solution will be put in place shortly


# 3.0.1
* Added an controller action passed to the component in the content demo



# 3.0.0
* **Removed** ember-remodal based modals
* **Added** ember-elsewhere based modals
* **Added** more modal types - about, info, warning, confirmation, error, form
* **Added** documentation to the demo app



# 2.1.2

* Updated to latest version of `liquid-fire`.



# 2.1.1
 * **Reduced** specificity of SASS selectors
 * **Added** `CONTRIBUTING.md` to inform potential contributors
* **Added** `PULL_REQUEST_TEMPLATE.md` to ease intro into `pr-bumper`

# 2.1.0
* Added support to use the built in modalClose function only if needed

# 2.0.3
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 2.0.2

Destroy and recreate the modal content so that it can update on re-launch

Guard against a null destroy in perfect-scroll

# 2.0.1
 - Link to forked remodal temporary to force component re-rendering on dialog open/close

# 2.0.0
## Breaking
 - Changed the footer block controls interface to more cleanly support cancel, confirm and custom buttons within a single block-slot

# 1.0.0
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

