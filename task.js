document.addEventListener('DOMContentLoaded', () => {
    const fontSizeControls = document.querySelectorAll('.font-size');
    const colorControls = document.querySelectorAll('.book__control_color a');
    const bgColorControls = document.querySelectorAll('.book__control_background a');
    const book = document.getElementById('book');

    // Helper function to toggle classes
    const toggleClass = (el, className, add) => el && el.classList[add ? 'add' : 'remove'](className);


    const updateFontSize = (size) => {
        fontSizeControls.forEach(control => control.classList.remove('font-size_active'));
        const activeControl = document.querySelector(`.font-size[data-size="${size}"]`); // Corrected
        if (activeControl) activeControl.classList.add('font-size_active');
        toggleClass(book, 'book_fs-small', size === 'small');
        toggleClass(book, 'book_fs-big', size === 'big');
    };

    const updateColor = (type, color) => {
        const controls = type === 'text' ? colorControls : bgColorControls;
        controls.forEach(c => c.classList.remove('color_active'));
        const activeControl = document.querySelector(`.color[data-${type}-color="${color}"]`); // Corrected
        if (activeControl) activeControl.classList.add('color_active');

        // Corrected color class handling
        const colorClasses = type === 'text' ? ['black', 'gray', 'whitesmoke'] : ['black', 'gray', 'white'];
        colorClasses.forEach(c => toggleClass(book, `book_${type === 'text' ? 'color' : 'bg'}-${c}`, c === color));
    };


    fontSizeControls.forEach(control => {
        control.addEventListener('click', (e) => {
            e.preventDefault();
            updateFontSize(control.dataset.size);
        });
    });

    colorControls.forEach(control => {
        control.addEventListener('click', (e) => {
            e.preventDefault();
            updateColor('text', control.dataset.textColor);
        });
    });

    bgColorControls.forEach(control => {
        control.addEventListener('click', (e) => {
            e.preventDefault();
            updateColor('bg', control.dataset.bgColor);
        });
    });
});

  