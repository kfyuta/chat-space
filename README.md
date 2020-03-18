# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...


## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|VARCHAR|null: false|
|email|VARCHAR|null: false, unique: true|
|password|VARCHAR|null: false|
|password_confirmation|VARCHAR|null: false|

### Asociation
- has_many :groups, through: :groups_users
- has_many :messages

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|VARCHAL|null: false|

### Association
- has_many :messages
- has_many :users, through: :groups_users


## groups_usersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|INTEGER|null: false, foreign_key: true|
|group_id|INTEGER|null: false, foreign_key: true|

### Association
- belongs_to :user 
- belongs_to :group 

## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|content|TEXT|null: false|
|image|STRING||
|user_id|INTEGER|null: false, foreign_key: true|
|group_id|INTEGER|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group