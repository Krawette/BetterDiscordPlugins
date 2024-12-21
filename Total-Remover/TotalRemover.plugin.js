/**
 * @name TotalRemover
 * @author Krawette
 * @description ⊰Mostly deleting functionality, although possibility to change stuff⊱
 * @version 0.0.7
 */

module.exports = meta =>
{
  return {
    start: () =>
    {
      AddsButtonToMenu();
      let TotalRemoverValue = "ON";
      ValueCheckerStuffChanger();
    },
    stop: () =>
    {
      clearTimeout(DiscordCheckForSettingsPage);
      ClearStuffWhileOFF();
      let TotalRemoverValue = "OFF";
    },
  }

// ============================================== //
// Adding Remover Button for DC sidebar and other //
// ============================================== //
  // This implements a button, which will appear the Menu, at discord's settings/Tab column.
  function AddsButtonToMenu()
  {
    const DiscordSettingsButtonsColumn = document.querySelector(".side_a0");
    const DiscordCreateMenuButton = document.createElement('div');
    const DiscordMenuButton = document.querySelector(".Total_Remover");

    if (DiscordSettingsButtonsColumn)
    {
      if (!DiscordMenuButton)
      {
        DiscordSettingsButtonsColumn.appendChild(DiscordCreateMenuButton);
        DiscordCreateMenuButton.className = "item_a0 themed_a0 Total_Remover";
        DiscordCreateMenuButton.innerHTML = "Total Remover";
        DiscordCreateMenuButton.setAttribute("data-value", "OFF");
        DiscordCreateMenuButton.setAttribute('role', "tab");
        DiscordCreateMenuButton.setAttribute('tabindex', "-1");
        DiscordCreateMenuButton.setAttribute('aria-label', "Total Remover");
        DiscordCreateMenuButton.setAttribute('title', "Version - 0.0.7");
        DiscordCreateMenuButton.addEventListener('click', TheMenu);
      }
    }
    DiscordCheckForSettingsPage = setTimeout(AddsButtonToMenu, 1000);
  }

  // The Function for displaying: "Remover Settings" Popout/Page.
  function TheMenu()
  {
    const DiscordMenuButton = document.querySelector(".Total_Remover");
    const DiscordGripHolder = document.querySelector(".standardSidebarView_c25c6d");
    const RemoverHolder = document.createElement('div');

    if (DiscordMenuButton.getAttribute("data-value") === "OFF")
    {
      DiscordGripHolder.appendChild(RemoverHolder);
      RemoverHolder.id = "Remover_Holder";
      RemoverHolder.addEventListener('click', CheckIfOnlyHolderClicked);
      DiscordMenuButton.setAttribute("data-value", "ON");
      DiscordMenuButton.classList.add("selected_a0");
      MenuData();
      document.querySelector("#Remover_Exit_Button").addEventListener('click', TheMenu);
      ValueCheckerStuffChanger(); ValueCheckerStuffChanger(); // <- Do not touch, it just works.
    }
    else if (DiscordMenuButton.getAttribute("data-value") === "ON")
    {
      DiscordMenuButton.setAttribute("data-value", "OFF");
      DiscordMenuButton.classList.remove("selected_a0");
      if (document.querySelectorAll("#Remover_Holder"))
      {
        document.querySelectorAll("#Remover_Holder").forEach(object => {object.remove();});
      }
    }
  }

  // Checks if you have clicked the "background" the div id="Remover_Holder", instead of its children elements.
  function CheckIfOnlyHolderClicked()
  {
    const RemoverHolder = document.querySelector("#Remover_Holder");
    if (event.target === RemoverHolder) {TheMenu()}
  }

  // The Function for clearing all plugin's changes - starts to work, while Plugin goes OFF.
  function ClearStuffWhileOFF()
  {
    const DiscordMenuButton = document.querySelector(".Total_Remover");
    if (DiscordMenuButton) {DiscordMenuButton.remove()} // Deletes the Menu Button.
    for (let i = 1; i <= 55; i++) // Removing Styles by loop, from 1 to max i.
    {
      BdApi.DOM.removeStyle(`TotalRemoverDataModifierStyle-${i}`);
    }
  }

// ================================================ //
// The Menu "HTML" Structure for "Remover Settings" //
// ================================================ //
  function MenuData()
  {
    const MenuHolder = document.querySelector("#Remover_Holder");
    MenuHolder.innerHTML = `
    <div id="Remover_Plate">
      <h2 class="bd-settings-title">Total Remover Settings</h2>
      <div id="Remover_Menu_Bar">
        <button class="Remover_Menu_Button" data-value="TopbarPage" style="border-color: rgb(35,165,90); border-radius: var(--radius-sm) var(--radius-sm) 0 0; background-color: var(--background-secondary); cursor: default;">Topbar</button>
        <button class="Remover_Menu_Button" data-value="ServersColumnPage">Servers Column</button>
        <button class="Remover_Menu_Button" data-value="HomePage">Home</button>
        <button class="Remover_Menu_Button" data-value="MessagesPage">Messages</button>
        <button class="Remover_Menu_Button" data-value="MainTextInputPage">Main Text Input</button>
        <button class="Remover_Menu_Button" data-value="SettingsPage">Settings</button>
        <button class="Remover_Menu_Button" data-value="AppsPage">Apps</button>
        <button class="Remover_Menu_Button" data-value="VoiceCallPage">Voice Call</button>
        <button class="Remover_Menu_Button" data-value="UsersPage">Users</button>
        <button class="Remover_Menu_Button" data-value="MiscellaneousPage">Miscellaneous</button>
      </div>
      <div id="Scrollbar_Holder">
      <div id="Data_Holder">

        <!-- 1 -->
        <div class="Data_Plate" id="TopbarPage" style="height: fit-content;">
          <div class="Options_Holder">
            <label class="title_ed1d57 Remover_PageTitle" style="cursor: auto;"><Symbol-1>&#10140;</Symbol-1> Topbar Elements</label>
            <div class="Options_Plate"> <!-- 47 OPTION-->
              <div class="Flex_Plate">
                <div class="Option_Primary_Text">New Group DM Button</div>
                <div class="Option_Description_Text">Removes "New Group DM" button.</div>
              </div>
              <div class="Input_Plate">
                <div class="Checkrectangle" id="Fortyseven_Switch" data-value="OFF"><div class="Checkrectangle_Grip"></div></div>
              </div>
            </div>

            <div class="Options_Plate"> <!-- 48 OPTION-->
              <div class="Flex_Plate">
                <div class="Option_Primary_Text">Inbox Button</div>
                <div class="Option_Description_Text">Removes "Inbox" button.</div>
              </div>
              <div class="Input_Plate">
                <div class="Checkrectangle" id="Fortyeight_Switch" data-value="OFF"><div class="Checkrectangle_Grip"></div></div>
              </div>
            </div>

            <div class="Options_Plate"> <!-- 3 OPTION-->
              <div class="Flex_Plate">
                <div class="Option_Primary_Text">Help Button</div>
                <div class="Option_Description_Text">Removes "Help" button.</div>
              </div>
              <div class="Input_Plate">
                <div class="Checkrectangle" id="Third_Switch" data-value="OFF"><div class="Checkrectangle_Grip"></div></div>
              </div>
            </div>

            <div class="Options_Plate"> <!-- 9 OPTION-->
              <div class="Flex_Plate">
                <div class="Option_Primary_Text">Threads Button</div>
                <div class="Option_Description_Text">Removes "Threads" button.</div>
              </div>
              <div class="Input_Plate">
                <div class="Checkrectangle" id="Ninth_Switch" data-value="OFF"><div class="Checkrectangle_Grip"></div></div>
              </div>
            </div>

            <div class="Options_Plate"> <!-- 2 OPTION-->
              <div class="Flex_Plate">
                <div class="Option_Primary_Text">Notification Button</div>
                <div class="Option_Description_Text">Removes "Notification" button.</div>
              </div>
              <div class="Input_Plate">
                <div class="Checkrectangle" id="Second_Switch" data-value="OFF"><div class="Checkrectangle_Grip"></div></div>
              </div>
            </div>

            <div class="Options_Plate"> <!-- 49 OPTION-->
              <div class="Flex_Plate">
                <div class="Option_Primary_Text">Pinned Messages Button</div>
                <div class="Option_Description_Text">Removes "Pinned Messages" button.</div>
              </div>
              <div class="Input_Plate">
                <div class="Checkrectangle" id="Fortynine_Switch" data-value="OFF"><div class="Checkrectangle_Grip"></div></div>
              </div>
            </div>

            <div class="Options_Plate"> <!-- 50 OPTION-->
              <div class="Flex_Plate">
                <div class="Option_Primary_Text">Hide Member List Button</div>
                <div class="Option_Description_Text">Removes "Hide Member List" button.</div>
              </div>
              <div class="Input_Plate">
                <div class="Checkrectangle" id="Fifty_Switch" data-value="OFF"><div class="Checkrectangle_Grip"></div></div>
              </div>
            </div>
          </div>
          <!--2 Option Holder -->
          <div class="Options_Holder">
            <label class="title_ed1d57 Remover_PageTitle" style="cursor: auto;"><Symbol-1>&#10140;</Symbol-1> Topbar Additionals</label>
            <div class="Options_Plate"> <!-- 1 OPTION-->
              <div class="Flex_Plate">
                <div class="Option_Primary_Text">Search Bar</div>
                <div class="Option_Description_Text">Places the search bar on right side.</div>
              </div>
              <div class="Input_Plate">
                <div class="Checkrectangle" id="First_Switch" data-value="OFF"><div class="Checkrectangle_Grip"></div></div>
              </div>
            </div>
          </div>
        </div>

        <!-- 2 -->

        <div class="Data_Plate" id="ServersColumnPage">
          <div class="Options_Holder">
            <label class="title_ed1d57 Remover_PageTitle" style="cursor: auto;"><Symbol-1>&#10140;</Symbol-1> Servers Column</label>
            <div class="Options_Plate"> <!-- 27 OPTION-->
              <div class="Flex_Plate">
                <div class="Option_Primary_Text">Discover Button</div>
                <div class="Option_Description_Text">Removes "Discover" button, the one under servers.</div>
              </div>
              <div class="Input_Plate">
                <div class="Checkrectangle" id="Twentyseven_Switch" data-value="OFF"><div class="Checkrectangle_Grip"></div></div>
              </div>
            </div>

            <div class="Options_Plate"> <!-- 33 OPTION-->
              <div class="Flex_Plate">
                <div class="Option_Primary_Text">Vanish Server Icons.</div>
                <div class="Option_Description_Text">Removes server icons, displayed on closed server folders.</div>
              </div>
              <div class="Input_Plate">
                <div class="Checkrectangle" id="Thirtythree_Switch" data-value="OFF"><div class="Checkrectangle_Grip"></div></div>
              </div>
            </div>
          </div>
        </div>

        <!-- 3 -->

        <div class="Data_Plate" id="HomePage">
          <div class="Options_Holder">
            <label class="title_ed1d57 Remover_PageTitle" style="cursor: auto;"><Symbol-1>&#10140;</Symbol-1> Home Page</label>
            <div class="Options_Plate"> <!-- 28 OPTION-->
              <div class="Flex_Plate">
                <div class="Option_Primary_Text">Friends Button</div>
                <div class="Option_Description_Text">Removes Friends button.</div>
              </div>
              <div class="Input_Plate">
                <div class="Checkrectangle" id="Twentyeight_Switch" data-value="OFF"><div class="Checkrectangle_Grip"></div></div>
              </div>
            </div>

            <div class="Options_Plate"> <!-- 29 OPTION-->
              <div class="Flex_Plate">
                <div class="Option_Primary_Text"> Nitro Button</div>
                <div class="Option_Description_Text">Removes Nitro button.</div>
              </div>
              <div class="Input_Plate">
                <div class="Checkrectangle" id="Twentynine_Switch" data-value="OFF"><div class="Checkrectangle_Grip"></div></div>
              </div>
            </div>

            <div class="Options_Plate"> <!-- 30 OPTION-->
              <div class="Flex_Plate">
                <div class="Option_Primary_Text"> Shop Button</div>
                <div class="Option_Description_Text">Removes Shop button.</div>
              </div>
              <div class="Input_Plate">
                <div class="Checkrectangle" id="Thirty_Switch" data-value="OFF"><div class="Checkrectangle_Grip"></div></div>
              </div>
            </div>
          </div>
        </div>

        <!-- 4 -->

        <div class="Data_Plate" id="MessagesPage">
          <div class="Options_Holder">
            <label class="title_ed1d57 Remover_PageTitle" style="cursor: auto;"><Symbol-1>&#10140;</Symbol-1> Messages</label>
            <div class="Options_Plate"> <!-- 12 OPTION-->
              <div class="Flex_Plate">
                <div class="Option_Primary_Text">3 Fast Emoji Buttons</div>
                <div class="Option_Description_Text">Removes the three fast emojis + its separator.</div>
              </div>
              <div class="Input_Plate">
                <div class="Checkrectangle" id="Twelfth_Switch" data-value="OFF"><div class="Checkrectangle_Grip"></div></div>
              </div>
            </div>

            <div class="Options_Plate"> <!-- 14 OPTION-->
              <div class="Flex_Plate">
                <div class="Option_Primary_Text">Forward-to Button</div>
                <div class="Option_Description_Text">Removes the "Forward to" button.</div>
              </div>
              <div class="Input_Plate">
                <div class="Checkrectangle" id="Fourteenth_Switch" data-value="OFF"><div class="Checkrectangle_Grip"></div></div>
              </div>
            </div>
          </div>
          <!--2 Option Holder -->
          <div class="Options_Holder">
            <label class="title_ed1d57 Remover_PageTitle" style="cursor: auto;"><Symbol-1>&#10140;</Symbol-1> Messages > Menubar</label>
            <div class="Options_Plate"> <!-- 13 OPTION-->
              <div class="Flex_Plate">
                <div class="Option_Primary_Text">Top Emojis Inside Menubar</div>
                <div class="Option_Description_Text">Removes 4 emojis from top of Messages menubar.</div>
              </div>
              <div class="Input_Plate">
                <div class="Checkrectangle" id="Thirteenth_Switch" data-value="OFF"><div class="Checkrectangle_Grip"></div></div>
              </div>
            </div>

            <div class="Options_Plate"> <!-- 16 OPTION-->
              <div class="Flex_Plate">
                <div class="Option_Primary_Text">Add Reaction [Tree]</div>
                <div class="Option_Description_Text">Removes "Add Reaction" inside menubar.</div>
              </div>
              <div class="Input_Plate">
                <div class="Checkrectangle" id="Sixteenth_Switch" data-value="OFF"><div class="Checkrectangle_Grip"></div></div>
              </div>
            </div>

            <div class="Options_Plate"> <!-- 26 OPTION-->
              <div class="Flex_Plate">
                <div class="Option_Primary_Text">View Reactions</div>
                <div class="Option_Description_Text">Removes "View Reactions" inside menubar.</div>
              </div>
              <div class="Input_Plate">
                <div class="Checkrectangle" id="Twentysixth_Switch" data-value="OFF"><div class="Checkrectangle_Grip"></div></div>
              </div>
            </div>

            <div class="Options_Plate"> <!-- 17 OPTION-->
              <div class="Flex_Plate">
                <div class="Option_Primary_Text">Edit Message</div>
                <div class="Option_Description_Text">Removes "Edit Message" inside menubar.</div>
              </div>
              <div class="Input_Plate">
                <div class="Checkrectangle" id="Seventeenth_Switch" data-value="OFF"><div class="Checkrectangle_Grip"></div></div>
              </div>
            </div>

            <div class="Options_Plate"> <!-- 18 OPTION-->
              <div class="Flex_Plate">
                <div class="Option_Primary_Text">Reply</div>
                <div class="Option_Description_Text">Removes "Reply" inside menubar.</div>
              </div>
              <div class="Input_Plate">
                <div class="Checkrectangle" id="Eighteenth_Switch" data-value="OFF"><div class="Checkrectangle_Grip"></div></div>
              </div>
            </div>

            <div class="Options_Plate"> <!-- 15 OPTION-->
              <div class="Flex_Plate">
                <div class="Option_Primary_Text">Forward</div>
                <div class="Option_Description_Text">Removes "Forward" inside menubar.</div>
              </div>
              <div class="Input_Plate">
                <div class="Checkrectangle" id="Fifteenth_Switch" data-value="OFF"><div class="Checkrectangle_Grip"></div></div>
              </div>
            </div>

            <div class="Options_Plate"> <!-- 19 OPTION-->
              <div class="Flex_Plate">
                <div class="Option_Primary_Text">Create Thread</div>
                <div class="Option_Description_Text">Removes "Create Thread" inside menubar.</div>
              </div>
              <div class="Input_Plate">
                <div class="Checkrectangle" id="Nineteenth_Switch" data-value="OFF"><div class="Checkrectangle_Grip"></div></div>
              </div>
            </div>

            <div class="Options_Plate"> <!-- 20 OPTION-->
              <div class="Flex_Plate">
                <div class="Option_Primary_Text">Copy Text</div>
                <div class="Option_Description_Text">Removes "Copy Text" inside menubar.</div>
              </div>
              <div class="Input_Plate">
                <div class="Checkrectangle" id="Twentieth_Switch" data-value="OFF"><div class="Checkrectangle_Grip"></div></div>
              </div>
            </div>

            <div class="Options_Plate"> <!-- 21 OPTION-->
              <div class="Flex_Plate">
                <div class="Option_Primary_Text">Pin Message</div>
                <div class="Option_Description_Text">Removes "Pin Message" inside menubar.</div>
            </div>
              <div class="Input_Plate">
               <div class="Checkrectangle" id="Twentyfirst_Switch" data-value="OFF"><div class="Checkrectangle_Grip"></div></div>
              </div>
            </div>

            <div class="Options_Plate"> <!-- 22 OPTION-->
              <div class="Flex_Plate">
                <div class="Option_Primary_Text">Apps [Tree]</div>
                <div class="Option_Description_Text">Removes "Apps" inside menubar.</div>
              </div>
              <div class="Input_Plate">
                <div class="Checkrectangle" id="Twentysecond_Switch" data-value="OFF"><div class="Checkrectangle_Grip"></div></div>
              </div>
            </div>

            <div class="Options_Plate"> <!-- 23 OPTION-->
              <div class="Flex_Plate">
                <div class="Option_Primary_Text">Mark Unread</div>
                <div class="Option_Description_Text">Removes "Mark Unread" inside menubar.</div>
              </div>
              <div class="Input_Plate">
                <div class="Checkrectangle" id="Twentythird_Switch" data-value="OFF"><div class="Checkrectangle_Grip"></div></div>
              </div>
            </div>

            <div class="Options_Plate"> <!-- 24 OPTION-->
              <div class="Flex_Plate">
                <div class="Option_Primary_Text">Copy Message Link</div>
                <div class="Option_Description_Text">Removes "Copy Message Link" inside menubar.</div>
              </div>
              <div class="Input_Plate">
                <div class="Checkrectangle" id="Twentyfourth_Switch" data-value="OFF"><div class="Checkrectangle_Grip"></div></div>
              </div>
            </div>

            <div class="Options_Plate"> <!-- 25 OPTION-->
              <div class="Flex_Plate">
                <div class="Option_Primary_Text">Speak Message</div>
                <div class="Option_Description_Text">Removes "Speak Message" inside menubar.</div>
              </div>
              <div class="Input_Plate">
                <div class="Checkrectangle" id="Twentyfifth_Switch" data-value="OFF"><div class="Checkrectangle_Grip"></div></div>
              </div>
            </div>
          </div>
        </div>

        <!-- 5 -->


        <div class="Data_Plate" id="MainTextInputPage">
          <div class="Options_Holder">
            <label class="title_ed1d57 Remover_PageTitle" style="cursor: auto;"><Symbol-1>&#10140;</Symbol-1> Main Text Input</label>
            <div class="Options_Plate"> <!-- 6 OPTION-->
              <div class="Flex_Plate">
                <div class="Option_Primary_Text">Give Nitro Button</div>
                <div class="Option_Description_Text">Removes Send-gift (nitro) button.</div>
              </div>
              <div class="Input_Plate">
                <div class="Checkrectangle" id="Sixth_Switch" data-value="OFF"><div class="Checkrectangle_Grip"></div></div>
              </div>
            </div>

            <div class="Options_Plate"> <!-- 7 OPTION-->
              <div class="Flex_Plate">
                <div class="Option_Primary_Text">Sticker-Picker Button</div>
                <div class="Option_Description_Text">Removes Stickers button.</div>
              </div>
              <div class="Input_Plate">
                <div class="Checkrectangle" id="Seventh_Switch" data-value="OFF"><div class="Checkrectangle_Grip"></div></div>
              </div>
            </div>
          </div>
          <!--2 Option Holder -->
          <div class="Options_Holder">
            <label class="title_ed1d57 Remover_PageTitle" style="cursor: auto;"><Symbol-1>&#10140;</Symbol-1> Main Text Input > Inside Plus Button</label>
            <div class="Options_Plate"> <!-- 51 OPTION-->
              <div class="Flex_Plate">
                <div class="Option_Primary_Text">Upload a File Button</div>
                <div class="Option_Description_Text">Removes "Upload a File" button, from Menu.</div>
              </div>
              <div class="Input_Plate">
                <div class="Checkrectangle" id="Fiftyone_Switch" data-value="OFF"><div class="Checkrectangle_Grip"></div></div>
              </div>
            </div>

            <div class="Options_Plate"> <!-- 8 OPTION-->
              <div class="Flex_Plate">
                <div class="Option_Primary_Text">Create Thread Button</div>
                <div class="Option_Description_Text">Removes "Create Thread" button, from Menu.</div>
              </div>
              <div class="Input_Plate">
                <div class="Checkrectangle" id="Eighth_Switch" data-value="OFF"><div class="Checkrectangle_Grip"></div></div>
              </div>
            </div>

            <div class="Options_Plate"> <!-- 52 OPTION-->
              <div class="Flex_Plate">
                <div class="Option_Primary_Text">Create Poll Button</div>
                <div class="Option_Description_Text">Removes "Create Poll" button, from Menu.</div>
              </div>
              <div class="Input_Plate">
                <div class="Checkrectangle" id="Fiftytwo_Switch" data-value="OFF"><div class="Checkrectangle_Grip"></div></div>
              </div>
            </div>
          </div>
        </div>

        <!-- 6 -->

        <div class="Data_Plate" id="SettingsPage">
          <div class="Options_Holder">
            <label class="title_ed1d57 Remover_PageTitle" style="cursor: auto;"><Symbol-1>&#10140;</Symbol-1> Settings Menu Column</label>
            <div class="Options_Plate"> <!-- 34 OPTION-->
              <div class="Flex_Plate">
                <div class="Option_Primary_Text">Family Centre Options Tab</div>
                <div class="Option_Description_Text">Under "User Settings", removes "Family Centre" button.</div>
              </div>
              <div class="Input_Plate">
                <div class="Checkrectangle" id="Thirtyfour_Switch" data-value="OFF"><div class="Checkrectangle_Grip"></div></div>
              </div>
            </div>

            <div class="Options_Plate"> <!-- 35 OPTION-->
              <div class="Flex_Plate">
                <div class="Option_Primary_Text">Connections Options Tab</div>
                <div class="Option_Description_Text">Under "User Settings", removes "Connections" button.</div>
              </div>
              <div class="Input_Plate">
                <div class="Checkrectangle" id="Thirtyfive_Switch" data-value="OFF"><div class="Checkrectangle_Grip"></div></div>
              </div>
            </div>

            <div class="Options_Plate"> <!-- 36 OPTION-->
              <div class="Flex_Plate">
                <div class="Option_Primary_Text">Clips Options Tab</div>
                <div class="Option_Description_Text">Under "User Settings", removes "Clips" button.</div>
              </div>
              <div class="Input_Plate">
                <div class="Checkrectangle" id="Thirtysix_Switch" data-value="OFF"><div class="Checkrectangle_Grip"></div></div>
              </div>
            </div>

            <div class="Options_Plate"> <!-- 37 OPTION-->
              <div class="Flex_Plate">
                <div class="Option_Primary_Text">Nitro Options Tab</div>
                <div class="Option_Description_Text">Under "Payment Settings", removes "Nitro" button.</div>
              </div>
              <div class="Input_Plate">
                <div class="Checkrectangle" id="Thirtyseven_Switch" data-value="OFF"><div class="Checkrectangle_Grip"></div></div>
              </div>
            </div>

            <div class="Options_Plate"> <!-- 38 OPTION-->
              <div class="Flex_Plate">
                <div class="Option_Primary_Text">Server Boost Options Tab</div>
                <div class="Option_Description_Text">Under "Payment Settings", removes "Server Boost" button.</div>
              </div>
              <div class="Input_Plate">
                <div class="Checkrectangle" id="Thirtyeight_Switch" data-value="OFF"><div class="Checkrectangle_Grip"></div></div>
              </div>
            </div>

            <div class="Options_Plate"> <!-- 39 OPTION-->
              <div class="Flex_Plate">
                <div class="Option_Primary_Text">Subscriptions Options Tab</div>
                <div class="Option_Description_Text">Under "Payment Settings", removes "Subscriptions" button.</div>
              </div>
              <div class="Input_Plate">
                <div class="Checkrectangle" id="Thirtynine_Switch" data-value="OFF"><div class="Checkrectangle_Grip"></div></div>
              </div>
            </div>

            <div class="Options_Plate"> <!-- 40 OPTION-->
              <div class="Flex_Plate">
                <div class="Option_Primary_Text">Gift Inventory Options Tab</div>
                <div class="Option_Description_Text">Under "Payment Settings", removes "Gift Inventory" button.</div>
              </div>
              <div class="Input_Plate">
                <div class="Checkrectangle" id="Forty_Switch" data-value="OFF"><div class="Checkrectangle_Grip"></div></div>
              </div>
            </div>

            <div class="Options_Plate"> <!-- 41 OPTION-->
              <div class="Flex_Plate">
                <div class="Option_Primary_Text">Billing Options Tab</div>
                <div class="Option_Description_Text">Under "Payment Settings", removes "Billing" button.</div>
              </div>
              <div class="Input_Plate">
                <div class="Checkrectangle" id="Fortyone_Switch" data-value="OFF"><div class="Checkrectangle_Grip"></div></div>
              </div>
            </div>

            <div class="Options_Plate"> <!-- 42 OPTION-->
              <div class="Flex_Plate">
                <div class="Option_Primary_Text">Social Bar</div>
                <div class="Option_Description_Text"> Removes bar with DC socials.</div>
              </div>
              <div class="Input_Plate">
                <div class="Checkrectangle" id="Fortytwo_Switch" data-value="OFF"><div class="Checkrectangle_Grip"></div></div>
              </div>
            </div>

            <div class="Options_Plate"> <!-- 44 OPTION-->
              <div class="Flex_Plate">
                <div class="Option_Primary_Text">Merch - External Website Link</div>
                <div class="Option_Description_Text">Under close to "Betterdiscord", removes "Merch" link button.</div>
              </div>
              <div class="Input_Plate">
                <div class="Checkrectangle" id="Fortyfour_Switch" data-value="OFF"><div class="Checkrectangle_Grip"></div></div>
              </div>
            </div>
          </div>
          <!--2 Option Holder -->
          <div class="Options_Holder">
            <label class="title_ed1d57 Remover_PageTitle" style="cursor: auto;"><Symbol-1>&#10140;</Symbol-1> Settings > Tabs</label>
            <div class="Options_Plate"> <!-- 43 OPTION-->
              <div class="Flex_Plate">
                <div class="Option_Primary_Text">Nitro In Options</div>
                <div class="Option_Description_Text">Removes whole Nitro junk from Tabs.</div>
              </div>
              <div class="Input_Plate">
                <div class="Checkrectangle" id="Fortythree_Switch" data-value="OFF"><div class="Checkrectangle_Grip"></div></div>
              </div>
            </div>

            <div class="Options_Plate"> <!-- 46 OPTION-->
              <div class="Flex_Plate">
                <div class="Option_Primary_Text">Funky Following Menu</div>
                <div class="Option_Description_Text">Some pages posses menu Tabs - on top, make them scroll following you #_#.</div>
              </div>
              <div class="Input_Plate">
                <div class="Checkrectangle" id="Fortysix_Switch" data-value="OFF"><div class="Checkrectangle_Grip"></div></div>
              </div>
            </div>
          </div>
        </div>

        <!-- 7 -->

        <div class="Data_Plate" id="AppsPage">
          <div class="Options_Holder">
            <label class="title_ed1d57 Remover_PageTitle" style="cursor: auto;"><Symbol-1>&#10140;</Symbol-1> Apps > Main Text Input</label>
            <div class="Options_Plate"> <!-- 10 OPTION-->
              <div class="Flex_Plate">
                <div class="Option_Primary_Text">App Launcher Button</div>
                <div class="Option_Description_Text">Removes Launcher button (Next to Main Text Input).</div>
              </div>
              <div class="Input_Plate">
                <div class="Checkrectangle" id="Tenth_Switch" data-value="OFF"><div class="Checkrectangle_Grip"></div></div>
              </div>
            </div>
          </div>

          <div class="Options_Holder">
            <label class="title_ed1d57 Remover_PageTitle" style="cursor: auto;"><Symbol-1>&#10140;</Symbol-1> Apps > Messages</label>
            <div class="Options_Plate"> <!-- 11 OPTION-->
              <div class="Flex_Plate">
                <div class="Option_Primary_Text">Edit Image with Apps</div>
                <div class="Option_Description_Text"> Removes App button (displayed on your own picture files, while hovering on them).</div>
              </div>
              <div class="Input_Plate">
                <div class="Checkrectangle" id="Eleventh_Switch" data-value="OFF"><div class="Checkrectangle_Grip"></div></div>
              </div>
            </div>
          </div>
        </div>

        <!-- 8 -->

        <div class="Data_Plate" id="VoiceCallPage">
          <div class="Options_Holder">
            <label class="title_ed1d57 Remover_PageTitle" style="cursor: auto;"><Symbol-1>&#10140;</Symbol-1> Voice Call + Fullscreen</label>
            <div class="Options_Plate"> <!-- 4 OPTION-->
              <div class="Flex_Plate">
                <div class="Option_Primary_Text">Activity Button</div>
                <div class="Option_Description_Text">Removes "Start an Activity" button.</div>
              </div>
              <div class="Input_Plate">
                <div class="Checkrectangle" id="Fourth_Switch" data-value="OFF"><div class="Checkrectangle_Grip"></div></div>
              </div>
            </div>

            <div class="Options_Plate"> <!-- 5 OPTION-->
              <div class="Flex_Plate">
                <div class="Option_Primary_Text">Sound-Board Button</div>
                <div class="Option_Description_Text">Removes Sound-board button.</div>
              </div>
              <div class="Input_Plate">
                <div class="Checkrectangle" id="Fifth_Switch" data-value="OFF"><div class="Checkrectangle_Grip"></div></div>
              </div>
            </div>
          </div>
        </div>

        <!-- 9 -->

        <div class="Data_Plate" id="UsersPage">
          <div class="Options_Holder">
            <label class="title_ed1d57 Remover_PageTitle" style="cursor: auto;"><Symbol-1>&#10140;</Symbol-1> User Profiles</label>
            <div class="Options_Plate"> <!-- 54 OPTION-->
              <div class="Flex_Plate">
                <div class="Option_Primary_Text">Disable Avatar Decorations</div>
                <div class="Option_Description_Text">Disabling User/Avatar decorations.</div>
              </div>
              <div class="Input_Plate">
                <div class="Checkrectangle" id="Fiftyfour_Switch" data-value="OFF"><div class="Checkrectangle_Grip"></div></div>
              </div>
            </div>

            <div class="Options_Plate"> <!-- 55 OPTION-->
              <div class="Flex_Plate">
                <div class="Option_Primary_Text">Disable Background Decorations</div>
                <div class="Option_Description_Text">Disabling User's background animation.</div>
              </div>
              <div class="Input_Plate">
                <div class="Checkrectangle" id="Fiftyfive_Switch" data-value="OFF"><div class="Checkrectangle_Grip"></div></div>
              </div>
            </div>

          </div>
        </div>

        <!-- 10 -->

        <div class="Data_Plate" id="MiscellaneousPage">
          <div class="Options_Holder">
            <label class="title_ed1d57 Remover_PageTitle" style="cursor: auto;"><Symbol-1>&#10140;</Symbol-1> Misc Colours</label>
            <div class="Options_Plate"> <!-- 31 OPTION-->
              <div class="Flex_Plate">
                <div class="Option_Primary_Text">Colour "Add Friend" Button</div>
                <div class="Option_Description_Text">Makes DC-purple the "Add Friend" button (Home Page).</div>
              </div>
              <div class="Input_Plate">
                <div class="Checkrectangle" id="Thirtyone_Switch" data-value="OFF"><div class="Checkrectangle_Grip"></div></div>
              </div>
            </div>

            <div class="Options_Plate"> <!-- 32 OPTION-->
              <div class="Flex_Plate">
                <div class="Option_Primary_Text">Colour "Add Server" Button</div>
                <div class="Option_Description_Text">Makes DC-purple the "Add Server" button (Servers Column).</div>
              </div>
              <div class="Input_Plate">
                <div class="Checkrectangle" id="Thirtytwo_Switch" data-value="OFF"><div class="Checkrectangle_Grip"></div></div>
              </div>
            </div>

            <div class="Options_Plate"> <!-- 45 OPTION-->
              <div class="Flex_Plate">
                <div class="Option_Primary_Text">Colour "Log Out" Button</div>
                <div class="Option_Description_Text">Makes the "Log Out" button (Inside Settings Column) red.</div>
              </div>
              <div class="Input_Plate">
                <div class="Checkrectangle" id="Fortyfive_Switch" data-value="OFF"><div class="Checkrectangle_Grip"></div></div>
              </div>
            </div>

            <div class="Options_Plate"> <!-- 53 OPTION-->
              <div class="Flex_Plate">
                <div class="Option_Primary_Text">Colour "Delete Channel" Button</div>
                <div class="Option_Description_Text">Makes the "Delete Channel" button (Inside Channel Settings) red.</div>
              </div>
              <div class="Input_Plate">
                <div class="Checkrectangle" id="Fiftythree_Switch" data-value="OFF"><div class="Checkrectangle_Grip"></div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <!-- Additional Buttons Bar -->
      <div id="Additional_Buttons_Plate">
        <button class="Additional_Button" id="Remover_Exit_Button">Exit Settings</button> <button class="Additional_Button" id="Remover_DCserver_Button" onclick='window.open("https://discord.gg/gj7JFa6mF8", "_blank");' title='Join: "Pillow Fort"'>Remover Discord Server</button> <button class="Additional_Button" id="Remover_GITissuePage_Button" onclick='window.open("https://github.com/Krawette/BetterDiscordPlugins/issues", "_blank");' title="Website: Krawette-GitHub">Remover Github Issue Page</button>
      </div>
    </div>`;

// ============================ //
// "CSS" for The HTML Structure //
// ============================ //
    BdApi.DOM.addStyle("TotalRemoverData", `
      #Remover_Holder
      {
        z-index: 100;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 100vh;
        background: rgba(0,0,0,0.4);
        backdrop-filter: blur(0px);
        animation: Appear_Holder 0.4s 1 forwards;
      }
      @keyframes Appear_Holder {0% {backdrop-filter: blur(0px);} 100% {backdrop-filter: blur(4px);}}
      #Remover_Plate
      {
        box-sizing: content-box;
        width: 50%;
        min-width: 696px;
        max-width: 750px;
        background-color: var(--background-primary);
        border-radius: var(--radius-sm);
        box-shadow: 0 0 15px var(--background-tertiary);
        animation: Appear_Plate 0.4s 1 forwards;
        transform: rotateX(0deg);
        padding: 15px;
      }
      @keyframes Appear_Plate {0% {transform: rotateX(90deg);} 100% {transform: rotateX(0deg);}}
      /*-----------------------------------*/
      /*V Remover Settings MENU for Pages V*/
      /*-----------------------------------*/
      #Remover_Menu_Bar
      {
        opacity: 0;
        overflow-x: auto;
        overflow-y: hidden;
        box-sizing: content-box;
        margin-bottom: 10px;
        display: flex;
        justify-content: space-around;
        gap: 10px;
        scrollbar-width: thin;
        scrollbar-color: var(--background-secondary) var(--background-tertiary);
        background: var(--background-tertiary);
        border-radius: var(--radius-sm);
        scroll-behavior: smooth;
        animation: Appear_Menu_Bar 1.5s 1 forwards;
        padding: 5px;
      }
      @keyframes Appear_Menu_Bar {0% {opacity: 0;} 100% {opacity: 1;}}
      .Remover_Menu_Button
      {
        flex-shrink: 0;
        background: rgba(0,0,0,0);
        color: var(--interactive-normal);
        font-weight: bold;
        border-bottom: solid 3px rgba(0,0,0,0);
        border-radius: var(--radius-sm);
        padding: 4px 8px 4px 8px;
        transition: var(--custom-button-transition-duration)ease;
      }
      .Remover_Menu_Button:hover {background: var(--background-secondary);}
      .Remover_Menu_Button:active {border-color: rgb(128,132,142);}
      /*---------------------------------*/
      /*V Remover SETTINGS with options V*/
      /*---------------------------------*/
      #Scrollbar_Holder
      {
        overflow-x: hidden;
        overflow-y: auto;
        height: 65vh;
        scrollbar-width: thin;
        scrollbar-color: var(--background-tertiary) var(--background-primary);
      }
      #Data_Holder
      {
        display: flex;
        gap: 15px;
        position: relative;
        left: 0%;
        border-radius: var(--radius-sm);
        transition: left 0.3s ease-out;
      }
      .Data_Plate
      {
        overflow: hidden;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        width: 100%;
        height: 0;
        flex-shrink: 0;
      }

      .Remover_PageTitle Symbol-1 {display: inline-block; width: fit-content; transform: rotate(90deg);}
      .Options_Holder
      {
        margin-bottom: 15px;
        background: var(--background-tertiary);
        color: var(--interactive-normal);
        border-radius: var(--radius-sm);
        padding: 5px;
      }
      .Options_Plate
      {
        margin: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center; gap: 5px;
        background-color: var(--background-secondary);
        border-radius: var(--radius-sm);
        padding: 5px;
      }

      .Flex_Plate
      {
        box-sizing: border-box;
        display: flex;
        flex-wrap: wrap;
        gap: 5px;
        width: 80%;
        color: var(--interactive-normal);
      }
      .Option_Primary_Text {width: 100%; color: var(--header-primary);}
      .Option_Description_Text {width: 100%; color: var(--header-secondary);}

      .Input_Plate {display: flex; justify-content: center; width: 20%;}
      .Checkrectangle
      {
        box-sizing: content-box;
        width: 32px;
        height: 16px;
        cursor: pointer;
        background: rgb(128,132,142);
        box-shadow: 0 0 8px var(--background-tertiary);
        border-radius: var(--radius-sm);
        padding: 3px;
        transition: 0.2s;
      }
      .Checkrectangle_Grip
      {
        position: relative;
        width: 16px;
        height: 16px;
        background: rgb(255,255,255);
        border-radius: var(--radius-sm);
        transition: left 0.3s ease-out;
      }
      /*----------------------------------*/
      /*V Additional Buttons Bar SECTION V*/
      /*----------------------------------*/
      #Additional_Buttons_Plate
      {
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
        gap 5px;
        height: fit-content;
        background: var(--background-secondary);
        border-radius: var(--radius-sm);
        padding: 5px;
      }
      .Additional_Button
      {
        background: var(--background-tertiary);
        color: var(--interactive-normal);
        font-weight: bold;
        text-shadow: 0 0 4px var(--background-tertiary);
        border-radius: var(--radius-sm);
        padding: 5px 10px 5px 10px;
        transition: var(--custom-button-transition-duration)ease;
      }

      #Remover_Exit_Button {border: solid 1px var(--red-400);}
      #Remover_Exit_Button:hover {background: var(--red-400); color: var(--interactive-active);}

      #Remover_DCserver_Button {border: solid 1px var(--button-filled-brand-background);}
      #Remover_DCserver_Button:hover {background: var(--button-filled-brand-background); color: var(--interactive-active);}

      #Remover_GITissuePage_Button {border: solid 1px var(--yellow-360);}
      #Remover_GITissuePage_Button:hover {background: var(--yellow-360); color: var(--interactive-active);}
    `);

// =================================================== //
// Functionality for HTML (like <script>etc.</script>) //
// =================================================== //
    /*Scroll Horizontally Function on Menubar inside Remover Settings*/
    const Menu_Scrollbar_Horizontal_Function = document.querySelector("#Remover_Menu_Bar");
    Menu_Scrollbar_Horizontal_Function.addEventListener('wheel', (event) =>
    {
      event.preventDefault(); // For safety measurements, disables vertical scroll.
      Menu_Scrollbar_Horizontal_Function.scrollLeft += event.deltaY; // This gives ability to scroll horizontally (On Page Menu).
    });

    /*Menu Function for changing Pages*/
    const RemoverMenuBar = document.querySelector("#Remover_Menu_Bar");
    const RemoverMenuButton = document.querySelectorAll(".Remover_Menu_Button");
    const DataHolder = document.querySelector("#Data_Holder");
    const AllOptionsPlate = document.querySelectorAll(".Data_Plate");
    let CurrentPage = "TopbarPage";

    RemoverMenuButton.forEach(Button =>
    {
      Button.addEventListener('click', () =>
      {
        // Set all plates to height 0.
        AllOptionsPlate.forEach(Plate =>
        {
          Plate.style.height = "0";
        });
        // Delete selected look from all.
        RemoverMenuButton.forEach(MenuButtons =>
        {
          MenuButtons.style.borderColor = "";
          MenuButtons.style.borderRadius = "";
          MenuButtons.style.backgroundColor = "";
          MenuButtons.style.cursor = "pointer";
        });

        // Change the CurrentPage depending on what data-value was on the button.
        CurrentPage = event.currentTarget.getAttribute("data-value");

        // Apply style to the clicked button.
        event.currentTarget.style.borderRadius = "var(--radius-sm) var(--radius-sm) 0 0";
        event.currentTarget.style.borderColor = "rgb(35,165,90)";
        event.currentTarget.style.backgroundColor = "var(--background-secondary)";
        event.currentTarget.style.cursor = "default";

        // Checking if the CurrentPage - exists on the PagesMap const.
        if (PagesMap[CurrentPage])
        {
          document.querySelector(`#${CurrentPage}`).style.height = "fit-content";
          DataHolder.style.left = PagesMap[CurrentPage];
        }
      });
    });

    // Mapping of page names, with their change values.
    const PagesMap =
    {
      "TopbarPage": "0%",
      "ServersColumnPage": "calc(-100% - 15px)",
      "HomePage": "calc(-200% - 15px * 2)",
      "MessagesPage": "calc(-300% - 15px * 3)",
      "MainTextInputPage": "calc(-400% - 15px * 4)",
      "SettingsPage": "calc(-500% - 15px * 5)",
      "AppsPage": "calc(-600% - 15px * 6)",
      "VoiceCallPage": "calc(-700% - 15px * 7)",
      "UsersPage": "calc(-800% - 15px * 8)",
      "MiscellaneousPage": "calc(-900% - 15px * 9)"
    };

// ======================================================================================================================== //
// Detects the click on every switch inside Remover Settings - Changes the switch value and remembers it for bdApi saveData //
// ======================================================================================================================== //
    // Function to handle switch toggling.
    function ToggleSwitchFunction(SwitchValue)
    {
      const CurrentValue = SwitchValue.getAttribute("data-value");
      const ONorOFF = CurrentValue === "OFF" ? "ON" : "OFF";
      SwitchValue.setAttribute("data-value", ONorOFF);

      // Save the new value using the appropriate method.
      BdApi.Data.save("TotalRemoverData", SwitchValue.id, ONorOFF);

      // Call the function to check and change values.
      ValueCheckerStuffChanger();
    }

    // Add event listeners to the switches.
    const TheSwitches = document.querySelectorAll("[id$='_Switch']"); // Selects all Switches with ID ending with _Switch.
    TheSwitches.forEach(SwitchObject =>
    {
      SwitchObject.addEventListener('click', () => ToggleSwitchFunction(SwitchObject));
    });
  }
// ================================================== //
// Downloads data and executes them, per every switch //
// ================================================== //
  function ValueCheckerStuffChanger()
  {
    // Function for checking and executing the switch look for ON and OFF state.
    const Checkrectangle = document.querySelectorAll(".Checkrectangle");
    Checkrectangle.forEach(object =>
    {
      const SwitchCheckValue = object.getAttribute("data-value");
      const CheckRectangleGrip = object.querySelector(".Checkrectangle_Grip")
      if (SwitchCheckValue === "ON")
      {
        object.style.backgroundColor = "rgb(35,165,90)";
        if (CheckRectangleGrip)
        {
          CheckRectangleGrip.style.left = "50%";
        }
      }
      else if (SwitchCheckValue === "OFF")
      {
        object.setAttribute("data-value", "OFF");
        object.style.backgroundColor = "rgb(128,132,142)";
        if (CheckRectangleGrip)
        {
          CheckRectangleGrip.style.left = "0px";
        }
      }
    });

    // Function to initialize a switch.
    function InitializeTheSwitch(switchId, styleId, styleRule)
    {
      // Load the switch value, defaulting to "OFF"
      let switchValue = BdApi.Data.load("TotalRemoverData", switchId) || "OFF";
      const switchElement = document.querySelector(`#${switchId}`);

      // Set the data-value attribute based on the loaded value
      if (switchElement)
      {
        switchElement.setAttribute("data-value", switchValue);
      }

      // Apply or remove styles based on the switch value
      if (switchValue === "ON")
      {
        BdApi.DOM.addStyle(styleId, styleRule);
      }
      else
      {
        BdApi.DOM.removeStyle(styleId);
      }
    }

    // Initialize each switch with its corresponding ID, style ID, and style rule
    InitializeTheSwitch("First_Switch", "TotalRemoverDataModifierStyle-1", `.search_ff5f90 {order: 1 !important;}`);
    InitializeTheSwitch("Second_Switch", "TotalRemoverDataModifierStyle-2", `[aria-label='Notification Settings' i] {display: none !important;}`);
    InitializeTheSwitch("Third_Switch", "TotalRemoverDataModifierStyle-3", `[aria-label='Help' i] {display: none !important;}`);
    InitializeTheSwitch("Fourth_Switch", "TotalRemoverDataModifierStyle-4", `[aria-label='Start an Activity' i], [aria-label='Play Activities here' i], .wrapper_b6e2f9 .buttonContainer_b6e2f9 {display: none !important;}`);
    InitializeTheSwitch("Fifth_Switch", "TotalRemoverDataModifierStyle-5", `[aria-label='Open Soundboard' i] {display: none !important;}`);
    InitializeTheSwitch("Sixth_Switch", "TotalRemoverDataModifierStyle-6", `[aria-label='Send a gift' i] {display: none !important;}`);
    InitializeTheSwitch("Seventh_Switch", "TotalRemoverDataModifierStyle-7", `[aria-label='Open sticker picker' i] {display: none !important;}`);
    InitializeTheSwitch("Eighth_Switch", "TotalRemoverDataModifierStyle-8", `#channel-attach-THREAD {display: none !important;}`);
    InitializeTheSwitch("Ninth_Switch", "TotalRemoverDataModifierStyle-9", `[aria-label='Threads' i] {display: none !important;}`);
    InitializeTheSwitch("Tenth_Switch", "TotalRemoverDataModifierStyle-10", `.channelAppLauncher_df39bd {display: none !important;}`);
    InitializeTheSwitch("Eleventh_Switch", "TotalRemoverDataModifierStyle-11", `[aria-label="Edit Image with Apps"] {display: none !important;}`);
    InitializeTheSwitch("Twelfth_Switch", "TotalRemoverDataModifierStyle-12", `[aria-label^="Click to react with"], [aria-label="Message Actions"] .popoverReactionHoverBar_e986d9 .separator_e986d9 {display: none !important;}`);
    InitializeTheSwitch("Thirteenth_Switch", "TotalRemoverDataModifierStyle-13", `#message-actions .scroller_d90b3d .wrapper_a24e84 {display: none !important;}`);
    InitializeTheSwitch("Fourteenth_Switch", "TotalRemoverDataModifierStyle-14", `[aria-label="Forward"] {display: none !important;}`);
    InitializeTheSwitch("Fifteenth_Switch", "TotalRemoverDataModifierStyle-15", `#message-actions-forward {display: none !important;}`);
    InitializeTheSwitch("Sixteenth_Switch", "TotalRemoverDataModifierStyle-16", `#message-actions-add-reaction {display: none !important;}`);
    InitializeTheSwitch("Seventeenth_Switch", "TotalRemoverDataModifierStyle-17", `#message-actions-edit {display: none !important;}`);
    InitializeTheSwitch("Eighteenth_Switch", "TotalRemoverDataModifierStyle-18", `#message-actions-reply {display: none !important;}`);
    InitializeTheSwitch("Nineteenth_Switch", "TotalRemoverDataModifierStyle-19", `#message-actions-thread {display: none !important;}`);
    InitializeTheSwitch("Twentieth_Switch", "TotalRemoverDataModifierStyle-20", `#message-actions-copy-text {display: none !important;}`);
    InitializeTheSwitch("Twentyfirst_Switch", "TotalRemoverDataModifierStyle-21", `#message-actions-pin {display: none !important;}`);
    InitializeTheSwitch("Twentysecond_Switch", "TotalRemoverDataModifierStyle-22", `#message-actions-apps {display: none !important;}`);
    InitializeTheSwitch("Twentythird_Switch", "TotalRemoverDataModifierStyle-23", `#message-actions-mark-unread {display: none !important;}`);
    InitializeTheSwitch("Twentyfourth_Switch", "TotalRemoverDataModifierStyle-24", `#message-actions-copy-link {display: none !important;}`);
    InitializeTheSwitch("Twentyfifth_Switch", "TotalRemoverDataModifierStyle-25", `#message-actions-tts {display: none !important;}`);
    InitializeTheSwitch("Twentysixth_Switch", "TotalRemoverDataModifierStyle-26", `#message-actions-reactions {display: none !important;}`);
    InitializeTheSwitch("Twentyseven_Switch", "TotalRemoverDataModifierStyle-27", `.itemsContainer_fea3ef .footer_d71945 {display: none !important;}`);
    InitializeTheSwitch("Twentyeight_Switch", "TotalRemoverDataModifierStyle-28", `.friendsButtonContainer_f0963d {display: none !important;}`);
    InitializeTheSwitch("Twentynine_Switch", "TotalRemoverDataModifierStyle-29", `[aria-label='Direct Messages'] .channel_c91bad:has([href^="/store"]) {display: none !important;}`);
    InitializeTheSwitch("Thirty_Switch", "TotalRemoverDataModifierStyle-30", `[aria-label='Direct Messages'] .channel_c91bad:has([href^="/shop"]) {display: none !important;}`);
    InitializeTheSwitch("Thirtyone_Switch", "TotalRemoverDataModifierStyle-31", `.tabBar_c2739c .addFriend_c2739c.addFriend_c2739c.addFriend_c2739c {background: #5865f2; transition: 0.3s;} .tabBar_c2739c .addFriend_c2739c.addFriend_c2739c.addFriend_c2739c:hover {background: #4752c4 !important; transition: 0.4s;}`);
    InitializeTheSwitch("Thirtytwo_Switch", "TotalRemoverDataModifierStyle-32", `[aria-label ="Add a Server" i] svg path {fill: #5865f2;} [aria-label="Add a Server" i]:hover svg path {fill: var(--white-500) !important;} [aria-label="Add a Server" i]:hover {background: #4752c4 !important;transition: 0.4s;}`);
    InitializeTheSwitch("Thirtythree_Switch", "TotalRemoverDataModifierStyle-33", `.closedFolderIconWrapper_bc7085 {display: none !important;}`);
    InitializeTheSwitch("Thirtyfour_Switch", "TotalRemoverDataModifierStyle-34", `[aria-label="Family Centre" i] {display: none !important;}`);
    InitializeTheSwitch("Thirtyfive_Switch", "TotalRemoverDataModifierStyle-35", `[aria-label="Connections" i] {display: none !important;}`);
    InitializeTheSwitch("Thirtysix_Switch", "TotalRemoverDataModifierStyle-36", `[aria-label="Clips" i] {display: none !important;}`);
    InitializeTheSwitch("Thirtyseven_Switch", "TotalRemoverDataModifierStyle-37", `[aria-label="Nitro" i] {display: none !important;}`);
    InitializeTheSwitch("Thirtyeight_Switch", "TotalRemoverDataModifierStyle-38", `.side_a0 .item_a0:nth-child(15) {display: none !important;}`);
    InitializeTheSwitch("Thirtynine_Switch", "TotalRemoverDataModifierStyle-39", `[aria-label="Subscriptions" i] {display: none !important;}`);
    InitializeTheSwitch("Forty_Switch", "TotalRemoverDataModifierStyle-40", `[aria-label="Gift Inventory" i] {display: none !important;}`);
    InitializeTheSwitch("Fortyone_Switch", "TotalRemoverDataModifierStyle-41", `[aria-label="Billing" i] {display: none !important;}`);
    InitializeTheSwitch("Fortytwo_Switch", "TotalRemoverDataModifierStyle-42", `.side_a0 .socialLinks_c44e94 {display: none !important;}`);
    InitializeTheSwitch("Fortythree_Switch", "TotalRemoverDataModifierStyle-43", `.side_a0 .socialLinks_c44e94 {display: none !important;}`);
    InitializeTheSwitch("Fortyfour_Switch", "TotalRemoverDataModifierStyle-44", `[aria-label="Merch" i] {display: none !important;}`);
    InitializeTheSwitch("Fortyfive_Switch", "TotalRemoverDataModifierStyle-45", `[aria-label="Log Out" i] {color: var(--button-danger-background-hover) !important; transition: var(--custom-button-transition-duration) ease;} [aria-label="Log Out" i]:hover {color: var(--button-danger-background) !important; [aria-label="Log Out" i]:active {color: var(--button-danger-background-active) !important;}`);
    InitializeTheSwitch("Fortysix_Switch", "TotalRemoverDataModifierStyle-46", `.contentColumn_c25c6d .tabBar_bff66b, .contentColumn_c25c6d .tabBar_d8bb15 {z-index: 50; position: sticky; top: 0px; max-width: 100% !important; background-color: var(--background-primary); padding-top: 16px;}`);
    InitializeTheSwitch("Fortyseven_Switch", "TotalRemoverDataModifierStyle-47", `.toolbar_fc4f04 .inviteToolbar_c2739c {display: none !important;}`);
    InitializeTheSwitch("Fortyeight_Switch", "TotalRemoverDataModifierStyle-48", `.toolbar_fc4f04 .recentsIcon_ea0547 {display: none !important;}`);
    InitializeTheSwitch("Fortynine_Switch", "TotalRemoverDataModifierStyle-49", `[aria-label="Pinned Messages" i] {display: none !important;}`);
    InitializeTheSwitch("Fifty_Switch", "TotalRemoverDataModifierStyle-50", `[aria-label="Hide Member List" i] {display: none !important;}`);
    InitializeTheSwitch("Fiftyone_Switch", "TotalRemoverDataModifierStyle-51", `#channel-attach-upload-file {display: none !important;}`);
    InitializeTheSwitch("Fiftytwo_Switch", "TotalRemoverDataModifierStyle-52", `#channel-attach-poll {display: none !important;}`);
    InitializeTheSwitch("Fiftythree_Switch", "TotalRemoverDataModifierStyle-53", `[aria-label="Delete Channel" i] {color: var(--button-danger-background-hover) !important; transition: var(--custom-button-transition-duration) ease;} [aria-label="Delete Channel" i]:hover {color: var(--button-danger-background) !important; [aria-label="Delete Channel" i]:active {color: var(--button-danger-background-active) !important;}`);
    InitializeTheSwitch("Fiftyfour_Switch", "TotalRemoverDataModifierStyle-54", `.avatarDecoration_c51b4e {display: none !important;}`);
    InitializeTheSwitch("Fiftyfive_Switch", "TotalRemoverDataModifierStyle-55", `[aria-label="User Profile Modal" i] .root_b9fccc .profileEffects_f867f9, .profileEffects_f867f9 {display: none !important;}`);

    // Special connotations.
    let FourthSwitchValue = BdApi.Data.load('TotalRemoverData', 'Fourth_Switch') || "OFF"; let FifthSwitchValue = BdApi.Data.load('TotalRemoverData', 'Fifth_Switch') || "OFF";
    if (FourthSwitchValue === "ON" || FifthSwitchValue === "ON") {BdApi.DOM.addStyle("TotalRemoverDataModifierStyle-5.1", `.actionButtons_adcaac {display: flex !important;}`);}
    else if (FourthSwitchValue === "OFF" && FifthSwitchValue === "OFF") {BdApi.DOM.removeStyle("TotalRemoverDataModifierStyle-5.1");}

    let FifteenthSwitchValue = BdApi.Data.load('TotalRemoverData', 'Fifteenth_Switch') || "OFF"; let SeventeenthSwitchValue = BdApi.Data.load('TotalRemoverData', 'Seventeenth_Switch') || "OFF"; let EighteenthSwitchValue = BdApi.Data.load('TotalRemoverData', 'Eighteenth_Switch') || "OFF"; let NineteenthSwitchValue = BdApi.Data.load('TotalRemoverData', 'Nineteenth_Switch') || "OFF";
    if (FifteenthSwitchValue === "ON" && SeventeenthSwitchValue === "ON" && EighteenthSwitchValue === "ON" && NineteenthSwitchValue === "ON") {BdApi.DOM.addStyle("TotalRemoverDataModifierStyle-19.1", `[aria-label="Message Actions"] .scroller_d90b3d .separator_d90b3d:nth-of-type(5) {display: none !important;}`);}
    else if (FifteenthSwitchValue === "OFF" || SeventeenthSwitchValue === "OFF" || EighteenthSwitchValue === "OFF" || NineteenthSwitchValue === "OFF") {BdApi.DOM.removeStyle("TotalRemoverDataModifierStyle-19.1");}

    let SixteenthSwitchValue = BdApi.Data.load('TotalRemoverData', 'Sixteenth_Switch') || "OFF"; let TwentysixthSwitchValue = BdApi.Data.load('TotalRemoverData', 'Twentysixth_Switch') || "OFF";
    if (SixteenthSwitchValue === "ON" && TwentysixthSwitchValue === "ON") {BdApi.DOM.addStyle("TotalRemoverDataModifierStyle-19.1", `.container_da1432, .upsellContainer_ad7baa, .premiumFeatureBorder_c6d722, .upsellOverlayContainer_eb49af, .selectionGroup_bde965 {display: none !important;}`);}
    else if (SixteenthSwitchValue === "OFF" || TwentysixthSwitchValue === "OFF") {BdApi.DOM.removeStyle("TotalRemoverDataModifierStyle-19.1");}

    let ThirtysevenSwitchValue = BdApi.Data.load('TotalRemoverData', 'Thirtyseven_Switch') || "OFF"; let ThirtyeightSwitchValue = BdApi.Data.load('TotalRemoverData', 'Thirtyeight_Switch') || "OFF"; let ThirtynineSwitchValue = BdApi.Data.load('TotalRemoverData', 'Thirtynine_Switch') || "OFF"; let FortySwitchValue = BdApi.Data.load('TotalRemoverData', 'Forty_Switch') || "OFF"; let FortyoneSwitchValue = BdApi.Data.load('TotalRemoverData', 'Fortyone_Switch') || "OFF";
    if (ThirtysevenSwitchValue === "ON" && ThirtyeightSwitchValue === "ON" && ThirtynineSwitchValue === "ON" && FortySwitchValue === "ON" && FortyoneSwitchValue === "ON") {BdApi.DOM.addStyle("TotalRemoverDataModifierStyle-41.1", `.side_a0 .separator_a0:nth-child(12), .side_a0 .header_a0:nth-child(13) {display: none !important;}`);}
    else if (ThirtysevenSwitchValue === "OFF" || ThirtyeightSwitchValue === "OFF" || ThirtynineSwitchValue === "OFF" || FortySwitchValue === "OFF" || FortyoneSwitchValue === "OFF") {BdApi.DOM.removeStyle("TotalRemoverDataModifierStyle-41.1");}

    let EighthSwitchValue = BdApi.Data.load('TotalRemoverData', 'Eighth_Switch') || "OFF"; let FiftyoneSwitchValue = BdApi.Data.load('TotalRemoverData', 'Fiftyone_Switch') || "OFF"; let FiftytwoSwitchValue = BdApi.Data.load('TotalRemoverData', 'Fiftytwo_Switch') || "OFF";
    if (EighthSwitchValue === "ON" && FiftyoneSwitchValue === "ON" && FiftytwoSwitchValue === "ON") {BdApi.DOM.addStyle("TotalRemoverDataModifierStyle-52.1", `.inner_bdf0de .attachWrapper_f298d4:has([aria-label="More message options" i]) {display: none !important;}`);}
    else if (EighthSwitchValue === "OFF" || FiftyoneSwitchValue === "OFF" || FiftytwoSwitchValue === "OFF") {BdApi.DOM.removeStyle("TotalRemoverDataModifierStyle-52.1");}
  }
};
