<?php 
// connect to db
// query posts
echo <<<HTML
    <a href="htmx/post/1" class="cursor-pointer">
        <div class="rounded hover:bg-zinc-400 dark:hover:bg-zinc-800 transition-colors duration-100 p-4 bg-zinc-300 flex gap-2 flex-col justify-center items-center shadow-md dark:bg-zinc-700">
            <p class="">Post title</p>
            <img class="rounded" src="./test.webp" alt="" />
            <p class="text-center text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, aliquam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, aliquam?</p>
            <p class="text-xs">Author: admin</p>
        </div>
    </a>
    
    HTML;
?>