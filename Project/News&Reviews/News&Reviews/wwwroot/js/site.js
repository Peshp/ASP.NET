﻿    <script>
        // Workaround to fix style of text for showing items .. through ..
        // Problem related to Bootstrap 4 according to issue in link below
        $(document).ready(function () {
            $('ul.pagination > li.disabled > a').addClass('page-link');
        });

        $(document).ready(function () {
            // Get all the pagination links
            var paginationLinks = document.querySelectorAll('.pagination .page-link');

        // Change the colors
        paginationLinks.forEach(function (link) {
            link.style.color = '#fff';
        link.style.backgroundColor = '#353746';
        link.style.borderColor = 'cyan';
            });
        });

        // Change the style of the item slice text
        var itemSliceText = document.querySelector('.item-slice-text');
        itemSliceText.style.color = 'cyan';
        itemSliceText.style.fontSize = '20px';
        itemSliceText.style.border = '2px solid cyan';

        // Change the style of the write post title
        var writePostTitle = document.querySelector('.write-post-title');
        writePostTitle.style.fontSize = '25px';
        writePostTitle.style.color = 'lightblue';

        $(document).ready(function () {
            // Change the style of the item slice text
            $('.item-slice-text').css({
                'color': 'cyan',
                'font-size': '20px',
                'border': '2px solid cyan'
            });
        });
    </script>
