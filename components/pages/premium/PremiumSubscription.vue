<template>
  <div class='material-container flex flex-col'>
    <!-- Head -->
    <div class='py-10'>
      <!-- Title -->
      <h3 class='text-center text-3xl font-semibold leading-9 text-gray-200'>
        Premium
      </h3>

      <!-- Price -->
      <div class='mt-4 flex items-center justify-center'>
        <!-- Currency and cost -->
        <span class='flex items-start px-3 text-5xl leading-none tracking-tight text-gray-200'>
          <span class='mt-1 mr-2 text-3xl font-medium'> € </span>
          <span class='font-extrabold'> 4,9 </span>
        </span>

        <!-- Recurring -->
        <span class='text-xl font-medium leading-8 text-gray-300'>
          /month
        </span>
      </div>
    </div>

    <!-- Description -->
    <div class='flex flex-col justify-between border-t border-darkGray-100 bg-darkGray-700 p-6'>
      <ul>
        <!--  -->
        <li class='flex items-start'>
          <div class='shrink-0'>
            <check-icon class='icon h-6 w-6 text-accent-400' />
          </div>
          <NuxtLink class='link ml-3 text-base font-medium leading-6' to='/premium/custom-boorus'>
            Use additional Boorus
          </NuxtLink>
        </li>

        <!--  -->
        <li class='mt-4 flex items-start'>
          <div class='shrink-0'>
            <check-icon class='icon h-6 w-6 text-accent-400' />
          </div>
          <NuxtLink class='link ml-3 text-base font-medium leading-6' to='/premium/saved-posts'>
            Save Posts
          </NuxtLink>
        </li>

        <!--  -->
        <li class='mt-4 flex items-start'>
          <div class='shrink-0'>
            <check-icon class='icon h-6 w-6 text-accent-400' />
          </div>
          <p class='ml-3 text-base font-medium leading-6 text-gray-300'>
            One-click Post download
          </p>
        </li>

        <!--  -->
        <li class='mt-4 flex items-start'>
          <div class='shrink-0'>
            <check-icon class='icon h-6 w-6 text-accent-400' />
          </div>
          <p class='ml-3 text-base font-medium leading-6 text-gray-300'>
            Find Post source with
            <a class='link' href='https://saucenao.com/' rel='noopener nofollow' target='_blank'>
              SauceNAO
            </a>
          </p>
        </li>

        <!--  -->
        <li class='mt-4 flex items-start'>
          <div class='shrink-0'>
            <check-icon class='icon h-6 w-6 text-accent-400' />
          </div>
          <NuxtLink class='link ml-3 text-base font-medium leading-6' to='/premium/tag-collections'>
            Create collections of Tags
          </NuxtLink>
        </li>

        <!--  -->
        <li class='mt-4 flex items-start'>
          <div class='shrink-0'>
            <check-icon class='icon h-6 w-6 text-accent-400' />
          </div>
          <NuxtLink class='link ml-3 text-base font-medium leading-6' to='/premium/backup'>
            Create backups
          </NuxtLink>
        </li>

        <!--  -->
        <li class='mt-4 flex items-start'>
          <div class='shrink-0'>
            <check-icon class='icon h-6 w-6 text-accent-400' />
          </div>
          <a href='https://docs.r34.app/frequently-asked-questions#60cb54d0bdca4953bc2caf934d4df12b' target='_blank' rel='noopener' class='link ml-3 text-base font-medium leading-6'>
            Bypass website blocks
          </a>
        </li>
      </ul>

        <!--  -->
        <li class='mt-4 flex items-start'>
          <div class='shrink-0'>
            <check-icon class='icon h-6 w-6 text-accent-400' />
          </div>
          <p class='ml-3 text-base font-medium leading-6 text-gray-300'>
            No ads
          </p>
        </li>
      </ul>

      <div class='mt-8'>
        <a
          class='block w-full px-6 py-3 text-lg font-medium leading-6 text-center text-black transition border-0 rounded-lg bg-gradient-to-r from-accent-400 to-primary-400 focus-visible:focus-util hover:text-gray-800'
          href='https://gum.co/Rule34App' rel='noopener nofollow' target='_blank'>
          Subscribe
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  import { CheckIcon } from 'vue-feather-icons'

  export default {
    components: {
      CheckIcon
    }
  }
</script>
