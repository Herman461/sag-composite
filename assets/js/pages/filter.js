document.addEventListener('DOMContentLoaded', function(e) {
    window.addEventListener('click', function(e) {
        if (e.target.closest('.content-base-filter__checkbox')) {
            const checkbox = e.target.closest('.content-base-filter__checkbox')

            if (checkbox.querySelector('input').hasAttribute('checked')) {
                checkbox.querySelector('input').removeAttribute('checked')
            } else {
                checkbox.querySelector('input').setAttribute('checked', '')
            }

        }
    })

})
