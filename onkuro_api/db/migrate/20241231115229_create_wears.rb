class CreateWears < ActiveRecord::Migration[8.0]
  def change
    create_table :wears do |t|
      t.integer :user_id
      t.string :name
      t.string :category
      t.text :explanation
      t.string :color
      t.string :image_path
      t.string :status

      t.timestamps
    end
  end
end
