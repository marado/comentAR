# frozen_string_literal: true

class OrderedListManifestoItem < ManifestoItem
  has_many :list_items, class_name: 'ListItemManifestoItem', foreign_key: :manifesto_item_id
end