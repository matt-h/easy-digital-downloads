<?php
/**
 * Discounts DB class
 *
 * This class is for interacting with the discounts database table
 *
 * @package     EDD
 * @subpackage  Classes/DB Customers
 * @copyright   Copyright (c) 2015, Pippin Williamson
 * @license     http://opensource.org/licenses/gpl-2.0.php GNU Public License
 * @since       3.0
 */

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) exit;

/**
 * EDD_DB_Discounts Class
 *
 * @since 3.0
 */
class EDD_DB_Discounts extends EDD_DB  {

	/**
	 * The name of the cache group.
	 *
	 * @access public
	 * @since  3.0
	 * @var string
	 */
	public $cache_group = 'discounts';

	/**
	 * Get things started
	 *
	 * @access  public
	 * @since   3.0
	*/
	public function __construct() {

		global $wpdb;

		$this->table_name  = $wpdb->prefix . 'edd_discounts';
		$this->primary_key = 'id';
		$this->version     = '1.0';

	}

	/**
	 * Get columns and formats
	 *
	 * @access  public
	 * @since   3.0
	*/
	public function get_columns() {
		return array(
			'id'                  => '%d',
			'name'                => '%s',
			'code'                => '%s',
			'status'              => '%s',
			'type'                => '%s',
			'amount'              => '%s',
			'description'         => '%s',
			'use_count'           => '%d',
			'max_uses'            => '%d',
			'min_price'           => '%f',
			'notes'               => '%s',
			'date_created'        => '%s',
			'start_date'          => '%s',
			'expiration'          => '%s',
			'once_per_customer'   => '%d',
			'product_reqs'        => '%s',
			'product_condition'   => '%s',
			'excluded_products'   => '%s',
			'applies_globally'    => '%d',
		);
	}

	/**
	 * Get default column values
	 *
	 * @access  public
	 * @since   3.0
	*/
	public function get_column_defaults() {
		return array(
			'id'                  => 0,
			'name'                => '',
			'code'                => '',
			'status'              => '',
			'type'                => '',
			'amount'              => '',
			'description'         => '',
			'use_count'           => 0,
			'max_uses'            => 0,
			'min_price'           => 0.00,
			'notes'               => '',
			'date_created'        => date( 'Y-m-d H:i:s' ),
			'start_date'          => '',
			'expiration'          => '',
			'once_per_customer'   => 0,
			'product_reqs'        => '',
			'product_condition'   => '',
			'excluded_products'   => '',
			'applies_globally'    => 0,
		);
	}

	/**
	 * Insert a new customer
	 *
	 * @access  public
	 * @since   3.0
	 * @return  int
	 */
	public function insert( $data, $type = '' ) {
		$result = parent::insert( $data, $type );

		if ( $result ) {
			$this->set_last_changed();
		}

		return $result;
	}

	/**
	 * Update a customer
	 *
	 * @access  public
	 * @since   3.0
	 * @return  bool
	 */
	public function update( $row_id, $data = array(), $where = '' ) {
		$result = parent::update( $row_id, $data, $where );

		if ( $result ) {
			$this->set_last_changed();
		}

		return $result;
	}

	/**
	 * Delete a discount
	 *
	 * @access  public
	 * @since   2.3.1
	*/
	public function delete( $row_id = 0 ) {

		if ( empty( $row_id ) ) {
			return false;
		}

		$result = parent::delete( $row_id );


		if ( $result ) {
			$this->set_last_changed();
		}

		return $result;

	}

	/**
	 * Retrieve discounts from the database
	 *
	 * @access  public
	 * @since   3.0
	*/
	public function get_discounts( $args = array() ) {

		global $wpdb;

		$defaults = array(
			'number'  => 20,
			'offset'  => 0,
			'search'  => '',
			'orderby' => 'id',
			'order'   => 'DESC',
		);

		// Account for 'paged' in legacy $args
		if ( isset( $args['paged'] ) && $args['paged'] > 1 ) {
			$number         = isset( $args['number'] ) ? $args['number'] : $defaults['number'];
			$args['offset'] = ( ( $args['paged'] - 1 ) * $number );
			unset( $args['paged'] );
		}

		$args  = wp_parse_args( $args, $defaults );

		if( $args['number'] < 1 ) {
			$args['number'] = 999999999999;
		}

		$where = $this->parse_where( $args );

		$args['orderby'] = ! array_key_exists( $args['orderby'], $this->get_columns() ) ? 'id' : $args['orderby'];

		if( 'amount' == $args['orderby'] ) {
			$args['orderby'] = 'amount+0';
		}

		$cache_key = md5( 'edd_discounts_' . serialize( $args ) );

		$discounts = wp_cache_get( $cache_key, 'discounts' );

		$args['orderby'] = esc_sql( $args['orderby'] );
		$args['order']   = esc_sql( $args['order'] );

		if( $discounts === false ) {
			$discounts = $wpdb->get_col( $wpdb->prepare( "SELECT id FROM $this->table_name $where ORDER BY {$args['orderby']} {$args['order']} LIMIT %d,%d;", absint( $args['offset'] ), absint( $args['number'] ) ), 0 );

			if( ! empty( $discounts ) ) {

				foreach( $discounts as $key => $discount ) {
					$discounts[ $key ] = new EDD_Discount( $discount );
				}

				wp_cache_set( $cache_key, $discounts, 'discounts', 3600 );

			}

		}

		return $discounts;
	}

	private function parse_where( $args ) {
		$where = '';

		// Specific types
		if( ! empty( $args['type'] ) ) {

			if( is_array( $args['type'] ) ) {
				$types = implode( "','", array_map( 'sanitize_text_field', $args['type'] ) );
			} else {
				$types = sanitize_text_field( $args['type'] );
			}

			$where .= " AND `type` IN( '{$types}' ) ";

		}

		// Specific statuses
		if( ! empty( $args['status'] ) ) {

			if( is_array( $args['status'] ) ) {
				$statuses = implode( "','", array_map( 'sanitize_text_field', $args['status'] ) );
			} else {
				$statuses = sanitize_text_field( $args['status'] );
			}

			$where .= " AND `status` IN( '{$statuses}' ) ";

		}

		// Created for a specific date or in a date range
		if( ! empty( $args['date'] ) ) {

			if( is_array( $args['date'] ) ) {

				if( ! empty( $args['date']['start'] ) ) {

					$start = date( 'Y-m-d H:i:s', strtotime( $args['date']['start'] ) );

					$where .= " AND `date_created` >= '{$start}'";

				}

				if( ! empty( $args['date']['end'] ) ) {

					$end = date( 'Y-m-d H:i:s', strtotime( $args['date']['end'] ) );

					$where .= " AND `date_created` <= '{$end}'";

				}

			} else {

				$year  = date( 'Y', strtotime( $args['date'] ) );
				$month = date( 'm', strtotime( $args['date'] ) );
				$day   = date( 'd', strtotime( $args['date'] ) );

				$where .= " AND $year = YEAR ( date_created ) AND $month = MONTH ( date_created ) AND $day = DAY ( date_created )";
			}

		}

		// Specific pexpiration date
		if( ! empty( $args['expiration_date'] ) ) {

			if( is_array( $args['expiration_date'] ) ) {

				if( ! empty( $args['expiration_date']['start'] ) ) {

					$start = date( 'Y-m-d H:i:s', strtotime( $args['expiration_date']['start'] ) );

					$where .= " AND `expiration_date` >= '{$start}'";

				}

				if( ! empty( $args['expiration_date']['end'] ) ) {

					$end = date( 'Y-m-d H:i:s', strtotime( $args['expiration_date']['end'] ) );

					$where .= " AND `expiration_date` <= '{$end}'";

				}

			} else {

				$year  = date( 'Y', strtotime( $args['expiration_date'] ) );
				$month = date( 'm', strtotime( $args['expiration_date'] ) );
				$day   = date( 'd', strtotime( $args['expiration_date'] ) );

				$where .= " AND $year = YEAR ( expiration_date ) AND $month = MONTH ( expiration_date ) AND $day = DAY ( expiration_date )";
			}

		}

		// Specific paid date or in a paid date range
		if( ! empty( $args['start_date'] ) ) {

			if( is_array( $args['start_date'] ) ) {

				if( ! empty( $args['start_date']['start'] ) ) {

					$start = date( 'Y-m-d H:i:s', strtotime( $args['start_date']['start'] ) );

					$where .= " AND `start_date` >= '{$start}'";

				}

				if( ! empty( $args['start_date']['end'] ) ) {

					$end = date( 'Y-m-d H:i:s', strtotime( $args['start_date']['end'] ) );

					$where .= " AND `start_date` <= '{$end}'";

				}

			} else {

				$year  = date( 'Y', strtotime( $args['start_date'] ) );
				$month = date( 'm', strtotime( $args['start_date'] ) );
				$day   = date( 'd', strtotime( $args['start_date'] ) );

				$where .= " AND $year = YEAR ( start_date ) AND $month = MONTH ( start_date ) AND $day = DAY ( start_date )";
			}

		}

		if ( ! empty( $where ) ) {
			$where = ' WHERE 1=1 ' . $where;
		}

		return $where;
	}


	/**
	 * Count the total number of discounts in the database
	 *
	 * @access  public
	 * @since   3.0
	*/
	public function count( $args = array() ) {
		global $wpdb;

		$where     = $this->parse_where( $args );
		$cache_key = md5( 'edd_discounts_count' . serialize( $args ) );

		$count = wp_cache_get( $cache_key, 'discounts' );

		if( $count === false ) {

			$sql   = "SELECT COUNT($this->primary_key) FROM " . $this->table_name . "{$where};";
			$count = $wpdb->get_var( $sql );

			wp_cache_set( $cache_key, $count, 'discounts', 3600 );

		}

		return absint( $count );
	}

	/**
	 * Sets the last_changed cache key for customers.
	 *
	 * @access public
	 * @since  3.0
	 */
	public function set_last_changed() {
		wp_cache_set( 'last_changed', microtime(), $this->cache_group );
	}

	/**
	 * Retrieves the value of the last_changed cache key for customers.
	 *
	 * @access public
	 * @since  3.0
	 */
	public function get_last_changed() {
		if ( function_exists( 'wp_cache_get_last_changed' ) ) {
			return wp_cache_get_last_changed( $this->cache_group );
		}

		$last_changed = wp_cache_get( 'last_changed', $this->cache_group );
		if ( ! $last_changed ) {
			$last_changed = microtime();
			wp_cache_set( 'last_changed', $last_changed, $this->cache_group );
		}

		return $last_changed;
	}

	/**
	 * Create the table
	 *
	 * @access  public
	 * @since   3.0
	*/
	public function create_table() {

		global $wpdb;

		require_once( ABSPATH . 'wp-admin/includes/upgrade.php' );

		$sql = "CREATE TABLE " . $this->table_name . " (
		id bigint(20) NOT NULL AUTO_INCREMENT,
		name mediumtext NOT NULL,
		code varchar(50) NOT NULL,
		status varchar(20) NOT NULL,
		type varchar(20) NOT NULL,
		amount mediumtext NOT NULL,
		description longtext NOT NULL,
		use_count bigint(20) NOT NULL,
		max_uses bigint(20) NOT NULL,
		min_price mediumtext NOT NULL,
		notes longtext NOT NULL,
		date_created datetime NOT NULL,
		start_date datetime NOT NULL,
		expiration datetime NOT NULL,
		once_per_customer int(1) NOT NULL,
		product_reqs mediumtext NOT NULL,
		product_condition varchar(3) NOT NULL,
		excluded_products mediumtext NOT NULL,
		applies_globally int(1) NOT NULL,
		PRIMARY KEY (id),
		KEY code (code)
		) CHARACTER SET utf8 COLLATE utf8_general_ci;";

		dbDelta( $sql );

		update_option( $this->table_name . '_db_version', $this->version );
	}

}
