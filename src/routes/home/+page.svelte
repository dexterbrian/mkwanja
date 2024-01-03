<script>
  import './home.css';
  import ProfileContainer from '../../lib/components/ProfileContainer/ProfileContainer.svelte';
	import BudgetCard from '$lib/components/BudgetCard/BudgetCard.svelte';
  import TransactionCard from '$lib/components/TransactionCard/TransactionCard.svelte';

  // Load data from db via server
  import { user, budget, transactions } from '$lib/sampledata.js';

  // Getting current month and year
  const currentDate = new Date();
  const month = currentDate.toLocaleString('default', { month: 'short' });
  const year = currentDate.getFullYear();
  const monthAndYear = `${month} ${year}`;
</script>

<div id="main-container">
  <div id="ui">
    <ProfileContainer />
    <div id="month" class="font-bold">{monthAndYear}</div>

    <!-- Available Balance Card -->
    <div class="card bg-primary text-primary-content">
        <div class="card-body">
            <div class="flex flex-row justify-between">
                <h4 class="text-white font-bold text-sm">Available Balance</h4>
                <div id="edit-profile-button">
                    <svg id="edit-icon" xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path fill="#4b4efc" d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/></svg>
                </div>
            </div>
            <h1 class="text-white font-bold text-3xl">{ `${user.currency} ${user.availableBalance}` }</h1>
        </div>
    </div>

    <!-- My Budget Section -->
    <div id="my-budget" class="mt-6 text-black">
      <div class="section-title flex flex-row">
        <h2 class="text-lg">My Budget</h2>
        <div><span class="text-black text-xs ml-6">KES 200 left to budget</span></div>
      </div>
      <div id="budget-container" class="flex flex-row">
        <div id="add-budget-button" class="flex flex-col justify-center">
            <svg id="add-icon" xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path fill="#4b4efc" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>
        </div>
        <div class="carousel carousel-center max-w-md p-4 space-x-4 rounded-box">
          <div class="carousel-item">
            <BudgetCard name={budget[0].name} amount={`${user.currency} ${budget[0].amount}`}/>
          </div> 
          <div class="carousel-item">
            <BudgetCard name={budget[1].name} amount={`${user.currency} ${budget[1].amount}`}/>
          </div> 
          <div class="carousel-item">
            <BudgetCard name={budget[2].name} amount={`${user.currency} ${budget[2].amount}`}/>
          </div> 
          <div class="carousel-item">
            <BudgetCard name={budget[3].name} amount={`${user.currency} ${budget[3].amount}`}/>
          </div> 
          <div class="carousel-item">
            <BudgetCard name={budget[4].name} amount={`${user.currency} ${budget[4].amount}`}/>
          </div>
        </div>
      </div>
    </div>

    <div id="recent-activity" class="mt-4 text-black">
      <h2 class="text-lg">Recent Activity</h2>
      <div class="mt-3">
        <TransactionCard name={transactions[0].name} amount={`${user.currency} ${transactions[0].amount}`} date={transactions[0].date} description={transactions[0].description} type={transactions[0].type}/>
        <TransactionCard name={transactions[2].name} amount={`${user.currency} ${transactions[2].amount}`} date={transactions[2].date} description={transactions[2].description} type={transactions[2].type}/>
      </div>
      
    </div>
  </div>
</div>
