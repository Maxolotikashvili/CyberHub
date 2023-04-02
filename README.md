# CyberHub
E-Commerce type project built with Angular 13 ( Material )

<header class="header">
  <div class="headerbox">
    <div class="logobox">
      <a class="logo" routerLink="/home">
        <span class="letter-c">C</span>yber<span class="hub">Hub</span>
      </a>
    </div>

    <fa-icon [icon]="bars" class="bars" (click)="openBurgerBar()"></fa-icon>

    <nav class="navigation">
      <ul class="list">
        <li>
          <a class="link" href="#News">News</a>
        </li>
        <li>
          <a class="link" href="#Build">Build</a>
        </li>
        <li>
          <a class="link" routerLink="/build/buildhome" routerLinkActive="active">Shop</a>
        </li>
      </ul>
    </nav>

    <!-- Badges -->
    <div class="badgebigbox">
      <div class="badgebox margin" [matBadge]="wishes.length" [matBadgeHidden]="wishes.length === 0" matBadgeOverlap="false">
        <fa-icon class="cart" [icon]="heart" routerLink="/wishlist"></fa-icon>
      </div>

      <div class="badgebox" [matBadge]="badgeDisplay()" [matBadgeHidden]="cartitems.length === 0" matBadgeOverlap="false">
        <fa-icon [icon]="cart" class="cart" routerLink="/cart"></fa-icon>
      </div>
    </div>

    <div class="signbox">
      <button mat-button class="sign" (click)="handleUserLogin()">Sign In</button>
      <span>Or</span>
      <button mat-button class="register" color="primary" (click)="handlUserRegister()">Register</button>
    </div>
  </div>

  <!-- Divider -->
  <mat-divider class="divider"></mat-divider>

  <div class="menubox">
    <br />
    <mat-menu #builtmenu="matMenu">
      <button mat-menu-item class="menu-inside-button" routerLink="/build/pctype/intel">Intel PC</button>
      <button mat-menu-item class="menu-inside-button" routerLink="/build/pctype/amd">AMD PC</button>
    </mat-menu>
    <button mat-button class="menu-button" [matMenuTriggerFor]="builtmenu">Built PC - s</button>

    <mat-menu #partsmenu="matMenu">
      <button *ngFor="let item of MAT_MENU_ITEMS" class="menu-inside-button" mat-menu-item [routerLink]="item.routerLink">{{item.name}}</button>
    </mat-menu>

    <button mat-button class="menu-button" [matMenuTriggerFor]="partsmenu">PC Parts</button>

    <mat-menu #accessoriesmenu="matMenu">
      <button mat-menu-item class="menu-inside-button" routerLink="/build/keyboards">Keyboard</button>
      <button mat-menu-item class="menu-inside-button" routerLink="/build/headsets">Headset</button>
    </mat-menu>

    <button mat-button class="menu-button" [matMenuTriggerFor]="accessoriesmenu">PC Accessories</button>
    <br />
  </div>

  <!-- Responsive -->
  <div class="responsivebox" [class.show]="show">
    <div class="responsive-signbox">
      <button mat-button class="responsive-sign" (click)="handleUserLogin()">Sign In</button>
      <span>Or</span>
      <button mat-button class="responsive-register" color="primary" (click)="handlUserRegister()">Register</button>
    </div>

    <!-- Badges -->
    <div class="responsive-badgebigbox">
      <div class="responsive-badgebox" [matBadge]="wishes.length" [matBadgeHidden]="wishes.length === 0" matBadgeOverlap="false">
        <fa-icon class="cart" [icon]="heart" routerLink="/wishlist"></fa-icon>
      </div>

      <div class="responsive-badgebox" [matBadge]="badgeDisplay()" [matBadgeHidden]="cartitems.length === 0" matBadgeOverlap="false">
        <fa-icon [icon]="cart" class="cart" routerLink="/cart"></fa-icon>
      </div>
    </div>

    <mat-divider class="responsive-divider"></mat-divider>

    <nav class="responsive-navigation">
      <ul class="responsive-list">
        <li>
          <a class="responsive-link" href="#news">News</a>
        </li>
        <li>
          <a class="responsive-link" href="#Build">Build</a>
        </li>
        <li>
          <a class="responsive-link" routerLink="/build/buildhome" routerLinkActive="active" >Shop</a>
        </li>
      </ul>
    </nav>

    <!-- Responsive Divider -->
    <mat-divider class="responsive-divider"></mat-divider>

    <div class="responsive-menubox">
      <mat-menu #builtmenu="matMenu">
        <button mat-menu-item class="menu-inside-button" routerLink="/build/pctype/intel">Intel PC</button>
        <button mat-menu-item class="menu-inside-button" routerLink="/build/pctype/amd">AMD PC</button>
      </mat-menu>

      <button mat-button class="menu-button" [matMenuTriggerFor]="builtmenu">Built PC - s</button>

      <mat-menu #partsmenu="matMenu">
        <button *ngFor="let item of MAT_MENU_ITEMS" class="menu-inside-button" [routerLink]="item.routerLink">{{item.name}}</button>
      </mat-menu>

      <button mat-button class="menu-button" [matMenuTriggerFor]="partsmenu">PC Parts</button>

      <mat-menu #accessoriesmenu="matMenu">
        <button mat-menu-item class="menu-inside-button">Monitor</button>
        <button mat-menu-item class="menu-inside-button">Keyboard</button>
        <button mat-menu-item class="menu-inside-button">Mouse</button>
        <button mat-menu-item class="menu-inside-button">Headset</button>
      </mat-menu>

      <button mat-button class="menu-button" [matMenuTriggerFor]="accessoriesmenu">PC Accessories</button>
    </div>
  </div>
</header>