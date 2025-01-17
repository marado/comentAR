# frozen_string_literal: true

class UnorderedListManifestoItem < ManifestoItem
  has_many :list_items, class_name: 'ListItemManifestoItem', foreign_key: :manifesto_item_id

  def render
    '<ul>' + list_items.map(&:render).join('') + '</ul>'
  end
end
