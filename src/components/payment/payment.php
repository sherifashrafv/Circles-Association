<section class="payment">
    <div class="container">

        <div class="grid grid-cols-2 items-center">
            <div>
                <h4 class="text-[#00141E] font-bold text-[60px]">
                    Payment info
                </h4>
                <div class="grid grid-cols">
                    <div
                            class="flex items-center justify-between gap-4 mt-4 mb-2 flex-wrap"
                    >
                        <div class="flex flex-col flex-grow">
                            <label
                                    class="text-[13px] text-[#74758f] mb-3 uppercase font-bold"
                                    for="name"
                            >name</label
                            >
                            <input
                                    type="text"
                                    placeholder="Enter Your Name ..."
                                    class="mt-2 h-[40px] rounded-lg py-6 px-4  cs-inp w-full outline-none"
                            />
                        </div>
                        <div class="flex flex-col flex-grow">
                            <label
                                    class="text-[13px] text-[#74758f] mb-3 uppercase font-bold"
                                    for="name"
                            >Mobile number</label
                            >
                            <input
                                    type="text"
                                    placeholder="Your mobile number..."
                                    class="mt-2 h-[40px] rounded-lg py-6 px-4 cs-inp w-full outline-none"
                            />
                        </div>

                    </div>
                    <div
                            class="calc100 flex items-center justify-between gap-4 mt-4 mb-2 flex-wrap"
                    >
                        <div class="flex flex-col flex-grow">
                            <label
                                    class="text-[13px] text-[#74758f] mb-3 uppercase font-bold"
                                    for="name"
                            >email address</label
                            >
                            <input
                                    type="text"
                                    placeholder="email address"
                                    class="mt-2 h-[40px] rounded-lg py-6 px-4  cs-inp w-full outline-none"
                            />
                        </div>
                        <div class="flex flex-col flex-grow">
                            <label
                                    class="text-[13px] text-[#74758f] mb-3 uppercase font-bold"
                                    for="name"
                            >Pay full amount</label
                            >
                            <div class="select-wrapper">
                                <select class="select  mt-2 h-[40px] rounded-lg  px-4  cs-inp w-full outline-none">
                                    <option disabled>Pay full amount</option>
                                    <option value="value1">Payment way</option>
                                    <option value="value1">Mango</option>
                                    <option value="value2">Banana</option>
                                    <option value="value3">Cherries</option>
                                </select>
                                
                            </div>

                            <!--  -->

                </div>

            </div>
            <div id="payment" class="my-14">
  <div id="card-type" class="flex gap-24 items-end">
    <div class="payment-option border border-[#e8e8ec] p-4 px-10 rounded-[20px]">
      <label for="credit" class="flex items-center cursor-pointer  flex-col">
      <img src="../assets/images/credit-card.png" class="h-[93px]" alt="Credit card">
      <div class="flex items-center gap-3">
      <input type="radio" id="credit" name="payment" value="credit">
      <p class="text-[15px]">Credit card</p>

      </div>
      </label>
    </div>
    <div class="payment-option border border-[#e8e8ec] p-4 px-10 rounded-[20px]">
      <label for="debit" class="flex items-center cursor-pointer  flex-col">
      <img src="../assets/images/debit-card.png" class="h-[93px]" alt="Debit card">        
        <div class="flex items-center gap-3">
        <input type="radio" id="credit" name="payment" value="credit">
        <p class="text-[15px]">Debit card</p>
      </div>
      </label>
    </div>
    <div class="payment-option border border-[#e8e8ec] p-4 px-10 rounded-[20px]">
      <label for="fawry" class="flex items-center cursor-pointer  flex-col">
      <img src="../assets/images/fawry.png" class="h-[93px]" alt="Fawry">        
      <div class="flex items-center gap-3">
      <input type="radio" id="credit" name="payment" value="credit">
      <p class="text-[15px]">Fawry</p>
      </div>
      </label>
    </div>
  </div>
  <button class="btn btn-primary w-fit mt-24 text-[14px] px-36 py-5 font-bold text-white">
Pay $342
</button>
</div>

        </div>

    </div>
</section>